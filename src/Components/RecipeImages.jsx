import { motion } from "framer-motion";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import styled from "styled-components";

const ImageContainer = styled(motion.div)`
	width: 100%;
	aspect-ratio: 16 / 9;

	& div:hover {
		flex: 3;
	}

	& div img {
		border-radius: 1rem;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

const ImageButtons = styled.div`
	margin: auto;
	width: max-content;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	padding: 0.4rem;
	height: min-content !important;

	border-radius: 5px;

	& span {
		font-size: 1.2rem;
		font-weight: 600;
	}
`;

const Button = styled.button`
	width: 25px;
	height: 25px;
	border-radius: 50%;
	border: none;
	padding: 0.4rem;
	background-color: var(--light-blue);
	box-sizing: content-box;
	transition: all 0.3s;

	& svg {
		width: 100%;
		height: 100%;
	}

	&:hover {
		background-color: rgb(170, 170, 255);
		box-shadow: none;
	}
`;

const RecipeImages = () => {
	const cmsImages = [
		"przepisy1.png",
		"przepisy2.png",
		"przepisy3.png",
		"przepisy4.png",
		"przepisy5.png",
	];
	const [index, setIndex] = useState(0);

	const nextPicture = () => {
		if (index < cmsImages.length - 1) setIndex(index + 1);
		else setIndex(0);
	};
	const prevPicture = () => {
		if (index > 0) setIndex(index - 1);
		else setIndex(cmsImages.length - 1);
	};

	return (
		<ImageContainer>
			<img
				src={cmsImages[index]}
				alt="menu"
				style={{ width: "100%", aspectRatio: "1879 / 962" }}
			/>
			<ImageButtons>
				<Button onClick={() => prevPicture()}>
					<FaArrowLeft />
				</Button>
				<span>
					{index + 1} z {cmsImages.length}
				</span>
				<Button onClick={() => nextPicture()}>
					<FaArrowRight />
				</Button>
			</ImageButtons>
		</ImageContainer>
	);
};

export default RecipeImages;
