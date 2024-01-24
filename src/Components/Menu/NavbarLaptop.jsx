/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import styled, { css } from "styled-components";
import NavigationLaptop from "./NavigationLaptop";
import { useEffect, useState } from "react";

const navbar = {
	closed: {
		width: 0,
		transition: {
			delay: 0.4,
			duration: 0.2,
		},
	},
	open: {
		width: "100%",
		transition: {
			duration: 0.2,
		},
	},
};

const Nav = styled(motion.nav)`
	z-index: 999;
	position: fixed;
	top: 0;
	height: 70px;
	background-color: white;
	opacity: 0.8;
	box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.1);
	padding: 1rem;
	padding-right: 2rem;
	transform: ${(props) =>
		props.$showNavbar ? css`translateY(0)` : css`translateY(-100%)`};
	transition: transform 0.3s;
`;

const NavbarLaptop = ({ list }) => {
	const [showNavbar, setShowNavbar] = useState(true);
	const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollPos = window.scrollY;
			setShowNavbar(prevScrollPos > currentScrollPos);
			setPrevScrollPos(currentScrollPos);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [prevScrollPos]);

	return (
		<Nav
			variants={navbar}
			initial={"closed"}
			animate={"open"}
			exit={"closed"}
			$showNavbar={showNavbar}>
			<NavigationLaptop list={list} />
		</Nav>
	);
};

export default NavbarLaptop;
