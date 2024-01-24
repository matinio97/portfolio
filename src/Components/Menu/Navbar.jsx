import { AnimatePresence } from "framer-motion";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import NavbarLaptop from "./NavbarLaptop";
import { NavbarMobile } from "./NavbarMobile";
import { useEffect, useState } from "react";

const Navbar = () => {
	const windowWidth = useWindowWidth();

	const [list, setList] = useState([]);

	useEffect(() => {
		setList([
			{
				text: "O mnie",
				element: document.getElementById("aboutMe"),
			},
			{
				text: "Projekty",
				element: document.getElementById("projects"),
			},
			{
				text: "Kontakt",
				element: document.getElementById("contact"),
			},
		]);
	}, []);

	return (
		<AnimatePresence mode="wait">
			{windowWidth < 768 ? (
				<NavbarMobile list={list} key="mobileNav" />
			) : (
				<NavbarLaptop list={list} key="laptopNav" />
			)}
		</AnimatePresence>
	);
};

export default Navbar;
