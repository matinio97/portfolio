import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
	position: relative;
`;

const Slider = styled.div`
	display: flex;
	overflow-x: hidden;
	scroll-snap-type: x mandatory;
	scroll-behavior: smooth;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

const SliderNav = styled.div`
	display: flex;
	gap: 1rem;
	position: absolute;
	bottom: 0.5rem;
	left: 50%;
	transform: translateX(-50%);
	z-index: 100;

	& span {
		width: 1rem;
		height: 1rem;
		border-radius: 999px;
		background-color: #ddd;
		opacity: 0.7;
		transition: all 0.3s;

		&.active {
			opacity: 1;
		}

		&:hover {
			opacity: 1;
		}
	}
`;

const Img = styled.img`
	width: 100%;
	aspect-ratio: "1000 / 565";
	scroll-snap-align: start;
	object-fit: cover;
`;

const AuthImages = () => {
	const [images, setImages] = useState([
		{ id: 0, src: "/php_1.png", alt: "Image 1" },
	]);

	const [activeIndex, setActiveIndex] = useState(0);

	useEffect(() => {
		setImages([
			{ id: 0, src: "/php_1.png", alt: "Image 1" },
			{ id: 1, src: "/php_2.png", alt: "Image 2" },
			{ id: 2, src: "/php_3.png", alt: "Image 3" },
			{ id: 3, src: "/php_4.png", alt: "Image 4" },
		]);
	}, []);

	const scroll = (id) => {
		setActiveIndex(id);
	};

	useEffect(() => {
		const element = document.getElementById(`image-${activeIndex}`);
		if (element) {
			const x = element.offsetLeft;
			document.getElementById("slider-container").scrollLeft = x;
		}
	}, [activeIndex]);

	return (
		<Container>
			<Slider id="slider-container">
				{images.map(({ id, src, alt }) => (
					<Img src={src} key={id} alt={alt} id={`image-${id}`} />
				))}
			</Slider>
			<SliderNav>
				{images.map(({ id }) => (
					<span
						key={id}
						onClick={() => scroll(id)}
						className={activeIndex === id ? "active" : ""}></span>
				))}
			</SliderNav>
		</Container>
	);
};

export default AuthImages;
