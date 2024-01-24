/* eslint-disable react/prop-types */
import styled, { css } from "styled-components";
import Heading from "./Heading";
import { motion } from "framer-motion";

const Box = styled(motion.div)`
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: -1;
	width: 100%;
	overflow: hidden;
	height: 90px;
`;

const Header = styled(Heading)`
	z-index: -1;
	width: max-content;
	padding: 1rem 1.8rem;
	font-weight: 700;
	border-radius: ${(props) =>
		props.$end ? css`0 50px 0 50px` : css`50px 0 50px 0`};
	background-color: var(--light-brown);
	font-size: 1.4rem;

	@media (min-width: 425px) {
		padding: 1rem 2.5rem;
		font-size: 1.8rem;

		& svg {
			font-size: 1.8rem;
			margin-right: 1rem;
		}
	}
`;

const animation = (end) => {
	return {
		initial: { x: end ? 50 : -50, opacity: 0 },
		whileInView: { x: 0, opacity: 1 },
		transition: {
			zIndex: -1,
			duration: 1,
			type: "spring",
			stiffnes: 120,
			ease: "easeInOut",
		},
		viewport: {
			once: true,
			amount: 0.4,
		},
	};
};

const Title = ({ end, title, id }) => {
	return (
		<Box {...animation(end)} id={id}>
			<Header $end={end && true} as="h3">
				{title}
			</Header>
		</Box>
	);
};

export default Title;
