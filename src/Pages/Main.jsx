import styled from "styled-components";
import { motion } from "framer-motion";
import Box from "../Components/Box";
import Heading from "../Components/Heading";
import Technologies from "../Components/Technologies";

const ImgBox = styled(motion.div)`
	grid-area: image;
	justify-self: center;
	width: 200px;
	height: 200px;
	display: flex;
	position: relative;
	z-index: -2;
	@media (min-width: 425px) {
		width: 250px;
		height: 250px;
	}
	@media (min-width: 768px) {
		width: 275px;
		height: 275px;
	}
	@media (min-width: 1024px) {
		width: 300px;
		height: 300px;
	}

	&::before {
		filter: drop-shadow(0px 0px 7px rgba(26, 26, 74, 0.8));
		border-radius: 50%;
		content: "";
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		z-index: -2;
		transform: translate(-25px, -25px);
		width: calc(100% + 50px);
		height: calc(100% + 50px);
		background: linear-gradient(
			135deg,
			var(--light-brown) 0%,
			rgb(255, 237, 183) 50%,
			var(--light-brown) 100%
		);
	}
`;

const Img = styled.img`
	filter: saturate(1.4);
	z-index: -1;
	width: 100%;
	height: 100%;
	object-fit: contain;
	border-radius: 50%;
	background-color: white;
	box-shadow: inset 0px 0px 7px rgba(26, 26, 74, 0.8);
	user-select: none;
	-moz-user-select: none;
	-webkit-user-drag: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	image-rendering: pixelated;
`;

const Layout = styled(Box)`
	width: 100%;
	display: grid;
	grid-template-areas: "welcome" "image" "technologies";
	grid-row-gap: 4rem;

	@media (min-width: 768px) {
		margin-top: 5rem;
		grid-template-areas: "welcome image" "technologies image" ". image" ". image";
		grid-column-gap: 3rem;
	}
`;

const TypingHeader = styled(Heading)`
	grid-area: "welcome";
	overflow: hidden;
	border-right: 3px solid var(--dark-blue);
	white-space: nowrap;
	font-size: 1.4rem;

	@media (min-width: 425px) {
		font-size: 1.6rem;
	}
	@media (min-width: 768px) {
		font-size: 2rem;
	}
	@media (min-width: 1024px) {
		font-size: 2.3rem;
	}

	word-break: keep-all;
	margin: 0 auto;
	letter-spacing: 0.1rem;
	animation: typing 2s steps(${(props) => props.$steps}, end),
		blink-caret 1s step-end infinite;

	@keyframes typing {
		from {
			width: 0;
		}
		to {
			width: 100%;
		}
	}

	@keyframes blink-caret {
		from,
		to {
			border-color: transparent;
		}
		50% {
			border-color: var(--dark-blue);
		}
	}
`;

const CodeImg = styled(motion.img)`
	width: 100%;
	height: 200px;

	object-fit: cover;
	@media (min-width: 768px) {
		margin-top: 70px;
		height: 370px;
	}
`;

const Main = () => {
	return (
		<main style={{ marginBottom: "5rem" }}>
			<Box $col $gap={2}>
				<CodeImg
					src="code.jpg"
					alt=""
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1 }}
				/>
				<Layout>
					<TypingHeader as="h3" $steps={18}>
						Cześć, tu Mateusz
					</TypingHeader>
					<Technologies />
					<ImgBox
						initial={{ x: 100, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{
							duration: 0.3,
							type: "spring",
							stiffness: 120,
							mass: 0.8,
							delay: 1,
						}}>
						<Img src="ja.png" alt="Moje zdjęcie" />
					</ImgBox>
				</Layout>
			</Box>
		</main>
	);
};

export default Main;
