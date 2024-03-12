import "./css/App.css";
import "./css/Fonts.css";
import "./css/LoadingAnimation.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import Aboutme from "./components/Aboutme";
import Header from "./components/Header";
import Landing from "./components/Landing";
import MainContainer from "./components/MainContainer";
import LoadingAnimation from "./components/LoadingAnimation";

const App = () => {
	const [loading, setLoading] = useState(true);
	const [showHeader, setShowHeader] = useState(false);
	const [showLanding, setShowLanding] = useState(false);
	const [showAboutme, setShowAboutme] = useState(false);

	useEffect(() => {
		const loadingTimer = setTimeout(() => {
			setLoading(false);
		}, 1500); // Set the duration of the loading animation (in milliseconds)

		// Simulate component animations after loading animation
		const animationTimer = setTimeout(() => {
			setShowHeader(true);
		}, 500); // Delay for header animation
		const animationTimer2 = setTimeout(() => {
			setShowLanding(true);
		}, 100); // Delay for landing animation
		const animationTimer3 = setTimeout(() => {
			setShowAboutme(true);
		}, 2500); // Delay for aboutme animation

		return () => {
			clearTimeout(loadingTimer); // Cleanup loading timer
			clearTimeout(animationTimer); // Cleanup header animation timer
			clearTimeout(animationTimer2); // Cleanup landing animation timer
			clearTimeout(animationTimer3); // Cleanup aboutme animation timer
		};
	}, []);

	return (
		<div className="App">
			{loading ? (
				<LoadingAnimation />
			) : (
				<MainContainer>
					{showHeader && <Header />}
					{showLanding && <Landing />}
					{showAboutme && <Aboutme />}
				</MainContainer>
			)}
		</div>
	);
};

export default App;
