import styled from "styled-components";
import Section from "../Components/Section";
import Box from "../Components/Box";
import Title from "../Components/Title";
import { motion } from "framer-motion";
import { FaInfo } from "react-icons/fa";

const Layout = styled(Box)`
	width: 100%;
	gap: 3rem;
	flex-direction: column;
	flex-wrap: nowrap;
	@media (min-width: 768px) {
		flex-direction: row;
	}
`;

const Img = styled(motion.img)`
	width: 100%;
	@media (min-width: 425px) {
		width: 80%;
	}
	@media (min-width: 768px) {
		width: 40%;
	}
	@media (min-width: 1024px) {
		width: 30%;
	}

	aspect-ratio: 1;
	border-radius: 2rem;
	box-shadow: 0 0 10px #fafafa;
`;

const P = styled.p`
	font-size: 1.2rem;
	/* font-weight: 600; */

	@media (min-width: 425px) {
		text-align: justify;
	}
`;

const animation = (site) => {
	return {
		initial: {
			x: site ? -50 : 50,
			opacity: 0,
		},
		whileInView: {
			x: 0,
			opacity: 1,
		},
		viewport: {
			once: true,
			amount: 0.4,
		},
	};
};

const AboutMe = () => {
	return (
		<>
			<Title icon={<FaInfo />} end title={"O mnie"} id="aboutMe" />
			<Section>
				<Layout>
					<Img src="pc.jpg" alt="pc" {...animation(true)} />
					<Box {...animation(false)}>
						<P>
							W czasach technikum interesowało mnie budowanie stron
							internetowych opartych o HTML, CSS, JavaScript oraz php. Jednakże,
							z powodu zbliżającej się matury, a potem studiów, przerwałem swoją
							naukę w tym obszarze.
						</P>
						<br />
						<P>
							W 2022 roku ponownie zacząłem zagłębić się w technologie
							internetowe. Zainteresowanie budowaniem aplikacji internetowych
							przerodziło w większe rozumienie ich budowy oraz działania. Dzięki
							temu rozwinąłem swoje umiejętności w języku JavaScript, poznając
							m. in. bibliotekę React, nauczyłem się budować responsywne oraz
							dynamiczne aplikacje. Dodatkowo przypominając sobie podstawy
							języka php oraz baz mySQL.
						</P>
						<br />
						<P>
							Chcę aktywnie poszerzać swoją wiedzę o nowe doświadczenia oraz
							umiejętności w tym obrzasze, w związku z czym czekam na kolejne
							wyzwania i możliwości rozwoju 👨‍💻.
						</P>
					</Box>
				</Layout>
			</Section>
		</>
	);
};

export default AboutMe;
