/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import styled from "styled-components";
import MenuItem from "./MenuItem";

const variants = {
	open: {
		transition: { staggerChildren: 0.07, delayChildren: 0.2 },
	},
	closed: {
		transition: { staggerChildren: 0.05, staggerDirection: -1 },
	},
};

const Ul = styled(motion.ul)`
	padding: 0;
	padding-right: 0.6rem;
	width: 100%;
	display: flex;
	justify-content: flex-end;
	gap: 2rem;
`;

const NavigationLaptop = ({ list }) => {
	return (
		<Ul variants={variants}>
			{list.map(({ text, element }, index) => (
				<MenuItem text={text} key={index} y={-50} element={element} />
			))}
		</Ul>
	);
};

export default NavigationLaptop;
