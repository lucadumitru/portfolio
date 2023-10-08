export const fadeInAnimationVariants = {
	initial: {
		opacity: 0,
		y: 100,
	},
	animate: (index) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.05 * index,
		},
	}),
};
