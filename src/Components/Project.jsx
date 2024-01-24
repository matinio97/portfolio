/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import styled from "styled-components";
import Heading from "./Heading";
import { animation } from "../variables/animation";

const Layout = styled(motion.div)`
	width: 100%;
	display: flex;
	gap: 2rem;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	@media (min-width: 1024px) {
		flex-direction: ${(props) => (props.$reverse ? "row-reverse" : "row")};
	}
`;

const Description = styled(motion.div)`
	text-align: center;
	flex: 1;
`;

const Media = styled(motion.div)`
	width: 100%;
	aspect-ratio: 16 / 9;
	flex: 1;
`;

const Project = ({ name, media, children, reverse }) => {
	return (
		<Layout $reverse={reverse && true}>
			<Description {...animation(true)}>
				<Heading as="h4">{name}</Heading>
				<br />
				{children}
			</Description>
			<Media {...animation(false)}>{media}</Media>
		</Layout>
	);
};

export default Project;
