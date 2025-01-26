export const REDIS_LOCK_DEFAULT_TIMEOUT = 5000;
export const REDIS_LOCK_DEFAULT_RETRY_DELAY = 50;

interface RedisClient {
	del: (key: string) => Promise<number>;
	set: (
		key: string,
		value: number | string,
		options: { PX: number; NX: true },
	) => Promise<string | null>;
}

async function acquireLock(
	client: RedisClient,
	lockName: string,
	timeout: number,
	retryDelay: number,
	onLockAcquired: (lockTimeoutValue: number) => void,
) {
	function retry() {
		// eslint-disable-next-line @typescript-eslint/no-misused-promises
		setTimeout(async () => {
			await acquireLock(client, lockName, timeout, retryDelay, onLockAcquired);
		}, retryDelay);
	}

	const lockTimeoutValue = Date.now() + timeout + 1;

	try {
		const result = await client.set(lockName, lockTimeoutValue, {
			PX: timeout,
			NX: true,
		});

		if (result === null) {
			throw new Error('Lock failed');
		}

		onLockAcquired(lockTimeoutValue);
	} catch (err) {
		if (err instanceof Error && err.message === 'The client is closed') {
			throw new Error('Redis client is closed');
		}

		retry();
	}
}

export function redisLock(client: RedisClient, retryDelay = REDIS_LOCK_DEFAULT_RETRY_DELAY) {
	if (!(client && 'v4' in client)) {
		throw new Error(
			'You must specify a v4 client instance of https://github.com/redis/node-redis',
		);
	}

	async function lock(lockName: string, timeout = REDIS_LOCK_DEFAULT_TIMEOUT) {
		return new Promise((resolve, reject) => {
			if (!lockName) {
				throw new Error(
					'You must specify a lock string. It is on the redis key `lock.[string]` that the lock is acquired.',
				);
			}

			lockName = `lock.${lockName}`;

			acquireLock(client, lockName, timeout, retryDelay, (lockTimeoutValue) => {
				resolve(async () => {
					if (lockTimeoutValue > Date.now()) {
						return await client.del(lockName);
					}
				});
			}).catch(reject);
		});
	}

	return lock;
}
