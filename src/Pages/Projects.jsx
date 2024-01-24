import Title from "../Components/Title";
import Section from "../Components/Section";
import { FaReact } from "react-icons/fa";
import styled from "styled-components";
import Project from "../Components/Project";
import ReactPlayer from "react-player/lazy";
import MenuImages from "../Components/MenuImages";
import RecipeImages from "../Components/RecipeImages";
import AuthImages from "../Components/AuthImages";

const P = styled.p`
	@media (min-width: 425px) {
		text-align: justify;
	}
	font-size: 1.2rem;
`;

const Projects = () => {
	return (
		<>
			<Title icon={<FaReact />} end title="Projekty" id="projects" />
			<Section style={{ flexDirection: "column", gap: "2rem" }}>
				<Project
					name="Projekt inżynierski"
					media={
						<ReactPlayer
							url="https://www.youtube.com/watch?v=UX_FKxVf1Yc"
							controls
							width={"100%"}
							height={"100%"}
						/>
					}>
					<P>
						Jako projekt inżynierski, razem z kolegą zbudowaliśmy makietę,
						wzbogaconą o funkcje inteligentnego ogrodu: regulacja temperatury w
						szklarni, system nawadniania oraz system oświetlenia.Wszystkie
						komponenty są sterowane za pośrednictwem aplikacji internetowej.
						Dane z poszczególnych czujników są sczytywane przez mikrokontroler,
						który następnie przekazuje informacje zwrotne w czasie rzeczywistym
						do aplikacji. Umożliwia to użytkownikowi bieżącą obserwację tego, co
						dzieje się w jego ogrodzie.
						<br /> <br />Z mojej strony opracowana została m. in. aplikacja
						bazująca na HTML, CSS oraz JavaScript.
					</P>
				</Project>

				<Project reverse name="Menu restauracji" media={<MenuImages />}>
					<P>
						Mój pierwszy projekt oparty na bibliotece React. Stona internetowa
						to w pełni responsywne menu napisane na potrzeby restauracji, w
						której kiedyś pracowałem. W projekcie wykorzystano bibliotekę
						Material UI oraz wprowadzono wielojęzykowość (polski, angielski,
						niemiecki) z wykorzystaniem biblioteki i18n.
						<br /> <br />
						Aplikacja dostępna jest pod adresem:
						<br />
						<a
							href="https://restauracja-bukowe-tarasy.pl"
							target="_blank"
							rel="noreferrer"
							style={{ color: "#44F" }}>
							https://restauracja-bukowe-tarasy.pl
						</a>
					</P>
				</Project>
				<Project name="Przepisy kulinarne" media={<RecipeImages />}>
					<P>
						Najobszerniejszy projekt napisany w bibliotece React. Aplikacja
						koncentruje się na współdzieleniu przepisów kulinarnych między
						użytkownikami. W ramach projektu wprowadzono m.in.: system
						logowania, role, system komentarzy, operacje CRUD na przepisach oraz
						użytkownikach...
						<br /> <br />
						Back-end oparty jest na platformie Supabase. W projekcie korzystano
						z takich bibliotek jak: Redux, React Query, React Hook Forms,
						Recharts...
						<br /> <br />
						Repozytorium GitHub: <br />
						<a
							href="https://github.com/matinio97/przepisy_cms"
							target="_blank"
							rel="noreferrer"
							style={{ color: "#44F", wordBreak: "break-all" }}>
							https://github.com/matinio97/przepisy_cms
						</a>
						<br />
						Aplikacja dostępna jest pod adresem: <br />
						<a
							href="https://przepisy24.netlify.app"
							target="_blank"
							rel="noreferrer"
							style={{ color: "#44F", wordBreak: "break-all" }}>
							https://przepisy24.netlify.app
						</a>
					</P>
				</Project>
				<Project name="System autoryzacji" media={<AuthImages />} reverse>
					<P>
						Projekt wykonany z myślą o przypomnieniu podstaw pisania w języku
						php połączonego z bazą danych mySQL. Aplikacja obejmuje takie
						funkcjonalności jak: rejestracja użytkownika, weryfikacja adresu
						email, resetowanie hasła oraz logowanie do konta.
						<br />
						<br />
						Wykorzystane zostały takie technologie jak: React, React Hook Forms,
						React Auth Kit, php, mySQL.
						<br /> <br />
						Repozytorium GitHub: <br />
						<a
							href="https://github.com/matinio97/php-signin-signup"
							target="_blank"
							rel="noreferrer"
							style={{ color: "#44F", wordBreak: "break-all" }}>
							https://github.com/matinio97/php-signin-signup
						</a>
						<br />
						Aplikacja dostępna jest pod adresem: <br />
						<a
							href="https://mysql-server-project.000webhostapp.com"
							target="_blank"
							rel="noreferrer"
							style={{ color: "#44F", wordBreak: "break-all" }}>
							https://mysql-server-project.000webhostapp.com
						</a>
					</P>
				</Project>
			</Section>
		</>
	);
};

export default Projects;
