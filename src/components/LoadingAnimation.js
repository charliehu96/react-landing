import "../css/LoadingAnimation.css";
import React, { useState, useEffect } from "react";

const LoadingAnimation = () => {
	const [animationComplete, setAnimationComplete] = useState(false);

	useEffect(() => {
		const animationEndHandler = () => {
			setAnimationComplete(true);
		};

		// Add event listener to detect animation end
		const loadingContainer = document.querySelector(".loading-container");
		loadingContainer.addEventListener("animationend", animationEndHandler);

		// Dynamically add animation class after a delay
		setTimeout(() => {
			loadingContainer.classList.add("animate-out");
		}, 1000); // Adjust the delay as needed

		// Cleanup: Remove event listener
		return () => {
			loadingContainer.removeEventListener(
				"animationend",
				animationEndHandler
			);
		};
	}, []);

	return (
		<div
			className={`loading-container ${animationComplete ? "hidden" : ""}`}
		>
			<div className="dot-container">
				<div className="dot-bricks"></div>
			</div>
		</div>
	);
};

export default LoadingAnimation;
