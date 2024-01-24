import { motion } from "framer-motion";
import styled from "styled-components";

const Box = styled(motion.div)`
	width: 100%;
	aspect-ratio: 16 / 9;
	overflow: hidden;
`;

const Ul = styled.ul`
	width: 100%;
	height: 100%;
	display: flex;
	margin: 0;
	padding: 0;
	gap: 0.5rem;
	list-style-type: none;
`;

const Li = styled.li`
	background-image: url(${(props) => props.$image});
	flex: 1;
	height: 100%;
	position: relative;
	background-repeat: no-repeat;
	background-position: center center;
	transition: all 0.3s;
	background-size: cover;
	border-radius: 1rem;

	&:hover {
		flex: 7;
	}
`;

const MenuImages = () => {
	return (
		<Box>
			<Ul>
				<Li $image="menu1.png"></Li>
				<Li $image="menu2.png"></Li>
				<Li $image="menu3.png"></Li>
			</Ul>
		</Box>
	);
};

export default MenuImages;
