export const fadeInAnimationVariants = {
	initial: {
		opacity: 0,
		y: 100,
	},
	animate: (index: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.02 * index,
		},
	}),
};

export const rocketLaunchAnimationVariants = {
	initial: {
		scale: 1,
		y: 0,
		x: 0,
	},

	animate: {
		scale: [1, 2.5, 3],
		x: [0, 0, 'calc(100vh)'],
		y: [0, 0, 'calc(-100vh)'],
		transition: {
			duration: 3,
			times: [0, 0.5, 1],
			delay: 0.5,
		},
	},
};
