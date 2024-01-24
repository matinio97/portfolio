import React from "react";
import { FaHtml5, FaCss3, FaReact, FaPhp } from "react-icons/fa";
import { SiJavascript, SiTypescript } from "react-icons/si";
import { SiMysql } from "react-icons/si";
export const technologies = [
	{
		name: "HTML5",
		icon: React.createElement(FaHtml5),
		progress: 90,
		color: "#f06529",
		hoverColor: "#e34c26",
	},
	{
		name: "CSS3",
		icon: React.createElement(FaCss3),
		progress: 80,
		color: "#2965f1",
		hoverColor: "#264de4",
	},
	{
		name: "JavaScript",
		icon: React.createElement(SiJavascript),
		progress: 60,
		color: "#f0db4f",
		hoverColor: "#d0a92d",
	},
	{
		name: "TypeScript",
		icon: React.createElement(SiTypescript),
		progress: 40,
		color: "#007acc",
		hoverColor: "#0058aa",
	},
	{
		name: "React",
		icon: React.createElement(FaReact),
		progress: 60,
		color: "#436cf3",
		hoverColor: "#29459e",
	},
	// {
	// 	name: "Redux",
	// 	icon: React.createElement(SiRedux),
	// 	progress: 60,
	// 	color: "#436cf3",
	// 	hoverColor: "#29459e",
	// },
	{
		name: "php",
		icon: React.createElement(FaPhp),
		progress: 50,
		color: "#222",
		hoverColor: "#444",
	},
	{
		name: "mySQL",
		icon: React.createElement(SiMysql),
		progress: 50,
		color: "#0985FF",
		hoverColor: "#f34f29",
	},
	// {
	// 	name: "Motion",
	// 	icon: React.createElement(TbBrandFramerMotion),
	// 	progress: 50,
	// 	color: "#EF09BC",
	// 	hoverColor: "#0985FF",
	// },
	// {
	// 	name: "Git",
	// 	icon: React.createElement(FaGitAlt),
	// 	progress: 40,
	// 	color: "#f34f29",
	// 	hoverColor: "#d12d07",
	// },
];
