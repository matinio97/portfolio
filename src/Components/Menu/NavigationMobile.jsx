/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import MenuItem from "./MenuItem";
import styled from "styled-components";

const variants = {
	open: {
		transition: { staggerChildren: 0.07, delayChildren: 0.2 },
	},
	closed: {
		transition: { staggerChildren: 0.05, staggerDirection: -1 },
	},
};

const Ul = styled(motion.ul)`
	padding: 25px;
	position: absolute;
	top: 100px;
	width: 230px;
`;

const NavigationMobile = ({ list, isOpen }) => {
	return (
		<Ul variants={variants} style={{ display: `${isOpen ? "block" : "none"}` }}>
			{list.map(({ text, element }, index) => (
				<MenuItem text={text} y={50} key={index} element={element} />
			))}
		</Ul>
	);
};

export default NavigationMobile;
