/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { styled } from "styled-components";

const variants = {
	open: {
		y: 0,
		opacity: 1,
		transition: {
			y: { stiffness: 120, velocity: -100 },
		},
	},
	closed: (y) => {
		return {
			y,
			opacity: 0,
			transition: {
				y: { stiffness: 120 },
			},
		};
	},
};

const Item = styled.div`
	display: flex;
	width: 100%;
	align-items: center;
	gap: 1rem;

	& span,
	& svg {
		font-size: 1.5rem;
		font-weight: 600;
	}
`;

const Li = styled(motion.li)`
	list-style: none;
	margin-bottom: 20px;
	display: flex;
	align-items: center;
	cursor: pointer;
	user-select: none;
	@media (min-width: 768px) {
		margin: 0;
	}
`;

const MenuItem = ({ text, y, element }) => {
	const scroll = (element) => {
		if (element) {
			const y = element.getBoundingClientRect().top + window.scrollY - 80;
			window.scrollTo({ top: y, behaviour: "smooth" });
		}
	};

	return (
		<Li
			onClick={() => scroll(element)}
			variants={variants}
			custom={y}
			whileHover={{ scale: 1.1, originX: 0 }}
			whileTap={{ scale: 0.95 }}>
			<Item>
				<span>{text}</span>
			</Item>
		</Li>
	);
};

export default MenuItem;
