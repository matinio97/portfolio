import { motion } from "framer-motion";
import styled from "styled-components";

const Section = styled(motion.section)`
	width: 100vw;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: clamp(1rem, 5vw, 10rem);
`;

export default Section;
