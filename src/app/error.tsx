'use client';

import { useEffect } from 'react';

import { Button } from '../components';

const Error = ({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) => {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<div className='flex grow flex-col items-center justify-center gap-2'>
			<h2 className='text-2xl'>Something went wrong! </h2>
			<div className='text-red-500'>{error.message}</div>
			<Button onClick={reset}>Try again</Button>
		</div>
	);
};

export default Error;
