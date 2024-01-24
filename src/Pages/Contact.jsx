import styled from "styled-components";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { motion } from "framer-motion";
import Title from "../Components/Title";
import Section from "../Components/Section";
import { FaAt } from "react-icons/fa";
import { animation } from "../variables/animation";

const Form = styled(motion.form)`
	border-radius: 7px;
	box-shadow: 0 0 5px var(--light-brown);
	padding: 1.2rem 0.6rem;
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 1.2rem;

	@media (min-width: 768px) {
		width: 80%;
		padding: 1.2rem 2rem;
	}
	@media (min-width: 1024px) {
		width: 70%;
	}
	@media (min-width: 1330px) {
		width: 50%;
	}
`;

const FormRowVertical = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.6rem;
	width: 100%;

	& label {
		font-weight: 600;
		@media (min-width: 425px) {
			font-size: 1.2rem;
		}
	}

	& textarea {
		min-height: 70px;
	}

	& input,
	& textarea {
		padding: 0.8rem 1rem;

		@media (min-width: 425px) {
			font-size: 1.1rem;
			padding: 1rem 1.2rem;
		}
		@media (min-width: 768px) {
			font-size: 1.2rem;
			padding: 1rem 2rem;
		}

		resize: vertical;
		border-radius: 5px;
		border: none;
		outline: none;
		transition: all 0.3s;
		box-shadow: inset 0 0 5px var(--light-brown);

		&:active {
			outline: none;
		}
		&:focus {
			outline: 1px solid #aaa;
		}
		&:invalid {
			border: 1px solid red;
		}
	}
`;

const Button = styled.button`
	margin-top: 1rem;
	font-size: 1.2rem;
	font-weight: 600;
	padding: 0.6rem 2rem;
	border-radius: 5px;
	border: none;
	background-color: rgb(196, 168, 142);
	transition: all 0.3s;

	&:hover {
		cursor: pointer;
		background-color: var(--light-brown);
		color: #2b2b2b;
	}
`;

const Contact = () => {
	const { register, handleSubmit, reset, formState } = useForm();
	const { errors } = formState;
	const [loading, setLoading] = useState(false);

	function onSubmit({ yourName, yourEmail, message }) {
		setLoading(true);

		emailjs
			.send(
				import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
				import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
				{
					from_name: yourName,
					from_email: yourEmail,
					message,
				},
				import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
			)
			.then(
				() => {
					setLoading(false);
					toast.success(`Dziękuję za wiadomość, odpowiem jak najszybciej 😉`);
					reset();
				},
				(error) => {
					setLoading(false);
					console.error(error.text);
					toast.error("Wystąpił błąd przy wysyłaniu wiadomości 😢");
				}
			);
	}

	const errorStyle = (error) => {
		return (
			error && {
				border: "1px solid red",
				outline: "none",
			}
		);
	};

	return (
		<>
			<Title icon={<FaAt />} end title="Kontakt" id="contact" />
			<Section {...animation(true)}>
				<Form onSubmit={handleSubmit(onSubmit)}>
					<FormRowVertical>
						<label htmlFor="yourName">Twoje imie</label>
						<input
							disabled={loading}
							type="text"
							id="yourName"
							autoComplete="off"
							style={errorStyle(errors?.yourName?.message)}
							placeholder="Wprowadź swoje imie..."
							{...register("yourName", { required: "Pole wymagane" })}
						/>
					</FormRowVertical>
					<FormRowVertical>
						<label htmlFor="yourEmail">Twój adres email</label>
						<input
							disabled={loading}
							type="text"
							id="yourEmail"
							autoComplete="off"
							style={errorStyle(errors?.yourEmail?.message)}
							placeholder="Wprowadź swój adres email..."
							{...register("yourEmail", {
								required: "Pole wymagane",
								pattern: {
									value: /\S+@\S+\.\S+/,
									message: "Wprowadź poprawny adres email",
								},
							})}
						/>
					</FormRowVertical>
					<FormRowVertical>
						<label htmlFor="message">Twoja wiadomość</label>
						<textarea
							disabled={loading}
							id="message"
							placeholder="Wprowadź wiadomość..."
							autoComplete="off"
							style={errorStyle(errors?.message?.message)}
							{...register("message", { required: "Pole wymagane" })}
						/>
					</FormRowVertical>
					<Button type="submit" disabled={loading}>
						{loading ? "Wysyłam..." : "Wyślij"}
					</Button>
				</Form>
			</Section>
		</>
	);
};

export default Contact;
