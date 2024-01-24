import { motion } from "framer-motion";
import styled from "styled-components";

const Box = styled(motion.div)`
	display: flex;
	flex-wrap: wrap;
	flex-direction: ${(props) => props.$col && "column"};
	justify-content: ${(props) => props.$justify || "center"};
	align-items: ${(props) => props.$align || "center"};
	gap: ${(props) => `${props.$gap}rem` || "1rem"};
`;

export default Box;
