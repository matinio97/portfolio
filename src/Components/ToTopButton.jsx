import styled from "styled-components";
import { FaArrowUp } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const Button = styled(motion.div)`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #dadada;
	width: 50px;
	height: 50px;
	border-radius: 50%;
	position: fixed;
	bottom: 15px;
	right: 15px;
	opacity: 0.6;
	animation: all 0.3s;
	z-index: 100;
	&:hover {
		opacity: 0.8;
		cursor: pointer;
	}

	& svg {
		font-size: 2rem;
	}
`;

const ToTopButton = () => {
	const [showButton, setShowButton] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setShowButton(window.scrollY > 600);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const toTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<AnimatePresence mode="wait">
			{showButton && (
				<Button
					onClick={() => toTop()}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}>
					<FaArrowUp />
				</Button>
			)}
		</AnimatePresence>
	);
};

export default ToTopButton;
