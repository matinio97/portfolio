import Icon from "./Icon";
import { technologies } from "../variables/technologiesList";
import { motion } from "framer-motion";
import styled from "styled-components";
import { randomShow } from "../variables/animation";

const Box = styled(motion.div)`
	display: flex;
	flex-wrap: wrap;
	padding: 1rem;
	align-items: center;
	justify-content: center;
	gap: 1rem;
`;

const Card = styled(motion.div)`
	align-items: center;
	display: flex;
	flex-direction: column;
	gap: 0.6rem;

	& svg {
		color: ${(props) => (props.color ? props.color : "#aaa")};
	}
	&:hover svg {
		color: ${(props) => (props.$hoverColor ? props.$hoverColor : "#aaa")};
	}

	& Progress::-webkit-progress-value {
		background-color: ${(props) => (props.color ? props.color : "#aaa")};
		border-radius: 0;
	}
	&:hover Progress::-webkit-progress-value {
		background-color: ${(props) =>
			props.$hoverColor ? props.$hoverColor : "#aaa"};
		transition: all 0.3s;
	}
`;

const Technologies = () => {
	return (
		<Box style={{ gridArea: "technologies" }}>
			{technologies.map(({ icon, color, hoverColor }, index) => (
				<Card
					key={index}
					color={color}
					$hoverColor={hoverColor}
					{...randomShow(index)}>
					<Icon>{icon}</Icon>
				</Card>
			))}
		</Box>
	);
};

export default Technologies;
