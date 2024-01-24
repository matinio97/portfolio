/* eslint-disable react/prop-types */
import { motion, useCycle } from "framer-motion";
import MenuToggle from "./MenuToggle";
import styled from "styled-components";
import NavigationMobile from "./NavigationMobile";

const sidebar = {
	open: {
		clipPath: `circle(500px at 40px 40px)`,
		transition: {
			type: "spring",
			stiffness: 120,
			damping: 15,
		},
	},
	closed: {
		clipPath: "circle(30px at 40px 40px)",
		transition: {
			delay: 0.4,
			type: "spring",
			stiffness: 120,
			damping: 15,
		},
	},
};

const MobileNavBackround = styled(motion.div)`
	position: fixed;
	top: 0;
	left: 0;
	height: 350px;
	width: 200px;
	background-color: var(--light-brown);
	opacity: 0.97;
	border-bottom-right-radius: 80px;
`;

const Nav = styled(motion.nav)`
	position: fixed;
	top: 0;
	left: 0;
	z-index: 999;
`;

export const NavbarMobile = ({ list }) => {
	const [isOpen, toggleOpen] = useCycle(false, true);

	return (
		<>
			<Nav
				key="mobileNav"
				initial={false}
				animate={isOpen ? "open" : "closed"}
				exit={"closed"}>
				<MobileNavBackround className="background" variants={sidebar} />
				<NavigationMobile list={list} isOpen={isOpen} />
				<MenuToggle toggle={() => toggleOpen()} />
			</Nav>
		</>
	);
};
