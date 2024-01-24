export const animation = (site) => {
	return {
		initial: {
			x: site ? -100 : 100,
			opacity: 0,
		},
		whileInView: {
			x: 0,
			opacity: 1,
		},
		viewport: {
			once: true,
			amount: 0.4,
		},
	};
};

export const randomShow = (index) => {
	return {
		initial: {
			x: index % 2 === 0 ? 100 : -100,
			y: -100,
			scale: 0,
		},
		animate: {
			x: 0,
			y: 0,
			scale: 1,
		},
		transition: {
			duration: 0.4,
			delay: 1 + index / 8,
		},
	};
};
