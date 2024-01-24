import { Toaster } from "react-hot-toast";
import Navbar from "./Components/Menu/Navbar";
import AboutMe from "./Pages/AboutMe";
import Contact from "./Pages/Contact";
import Main from "./Pages/Main";
import Projects from "./Pages/Projects";
// import Technologies from "./Pages/Technologies";
import ToTopButton from "./Components/ToTopButton";

const App = () => {
	return (
		<>
			<Navbar />
			<Main />
			<AboutMe />
			{/* <Technologies /> */}
			<Projects />
			<Contact />
			<ToTopButton />
			<Toaster
				position="top-center"
				gutter={12}
				containerStyle={{ margin: "8px" }}
				toastOptions={{
					success: {
						duration: 5000,
					},
					error: {
						duration: 5000,
					},
					style: {
						fontSize: "1.2rem",
						maxWidth: "500px",
						padding: "16px 24px",
						// backgroundColor: "#131313",
						color: "#62a062",
						border: "1px solid#62a062",
					},
				}}
			/>
		</>
	);
};
export default App;
