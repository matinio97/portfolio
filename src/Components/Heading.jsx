import { motion } from "framer-motion";
import styled, { css } from "styled-components";

const Heading = styled(motion.h1)`
	text-transform: uppercase;
	${(props) =>
		props.as === "h1" &&
		css`
			font-size: 3rem;
			font-weight: 600;
		`};

	${(props) =>
		props.as === "h2" &&
		css`
			font-size: 2.3rem;
			font-weight: 600;
		`};

	${(props) =>
		props.as === "h3" &&
		css`
			font-size: 2rem;
			font-weight: 600;
		`};

	${(props) =>
		props.as === "h4" &&
		css`
			font-size: 1.6rem;
			font-weight: 600;
		`};

	line-height: 1.4;
`;

export default Heading;
