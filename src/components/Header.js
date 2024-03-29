import React, { useState } from "react";
import "../css/Header.css";
import { ReactComponent as Logo } from "../assets/logo.svg";

const Header = () => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

	return (
		<header className="header row" id="header">
			<div className="col-md-1 align-center logo">
				<svg
					version="1.1"
					x="0px"
					y="0px"
					viewBox="0 0 256 256"
					width="100"
					height="100"
					xmlns="http://www.w3.org/2000/svg"
				>
					<polygon
						points="50,200 100,50 150,200"
						stroke="#8d48e4"
						strokeWidth="6"
						fill="none"
					/>
					<polygon
						points="120,200 170,80 220,200"
						stroke="#8d48e4"
						strokeWidth="6"
						fill="none"
					/>
					<polygon
						points="90,200 140,100 190,200"
						stroke="#8d48e4"
						strokeWidth="6"
						fill="none"
					/>
				</svg>
			</div>

			{/* Menu Dropdown */}
			<div className="col-md-7 menu-container d-flex align-items-center">
				<div
					onClick={toggleDropdown}
					className="text-left m-0 menu-button"
				>
					MENU
				</div>
				{isDropdownOpen && (
					<div
						style={{
							position: "absolute",
							top: "100%",
							left: 0,
							backgroundColor: "white",
							boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
							padding: "1rem",
						}}
					>
						<ul style={{ listStyle: "none", padding: 0 }}>
							<li>
								<a href="#section1">Item 1</a>
							</li>
							<li>
								<a href="#section2">Item 2</a>
							</li>
							<li>
								<a href="#section3">Item 3</a>
							</li>
							{/* Add more menu items here */}
						</ul>
					</div>
				)}
			</div>
			<div className="col-md-3 align-self-center d-flex justify-content-end">
				<svg
					height="33px"
					width="33px"
					version="1.1"
					id="_x32_"
					viewBox="0 0 512 512"
					fill="#8d48e4"
				>
					<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
					<g
						id="SVGRepo_tracerCarrier"
						strokeLinecap="round"
						strokeLinejoin="round"
					></g>
					<g id="SVGRepo_iconCarrier">
						{" "}
						<g>
							{" "}
							<path
								className="st0"
								d="M96.01,396.095l25.617-57.286l-11.716-5.998c-25.192-12.899-45.85-30.44-60.068-50.656 c-14.227-20.252-22.076-43.024-22.094-67.295c0.009-19.051,4.85-37.144,13.775-53.864c13.386-25.057,36.158-46.97,65.379-62.579 C136.107,82.8,171.651,73.542,210.05,73.55c41.055-0.008,78.749,10.604,108.928,28.237c30.215,17.632,52.761,42.202,64.268,69.914 l25.617-10.66c-14.235-34.207-41.252-62.986-75.885-83.22C298.31,57.589,255.874,45.81,210.05,45.801 C152.909,45.82,100.933,64.057,62.725,94.244c-19.087,15.103-34.741,33.242-45.67,53.665C6.134,168.313-0.009,191.05,0,214.861 c-0.018,30.378,10.008,58.93,27.152,83.264c14.796,21.029,34.867,38.986,58.579,52.996l-35.12,78.523l24.099-2.674 c49.474-5.51,97.6-17.271,137.544-29.248l-7.968-26.574C172.166,380.784,134.671,390.161,96.01,396.095z"
							></path>{" "}
							<path
								className="st0"
								d="M492.092,370.848c12.537-17.776,19.926-38.786,19.908-61.134c0.009-17.506-4.516-34.244-12.519-49.193 c-12.032-22.447-31.688-40.955-55.877-53.89c-24.208-12.934-53.059-20.342-83.969-20.351 c-41.208,0.018-78.776,13.152-106.543,35.084c-13.874,10.975-25.301,24.199-33.314,39.158 c-8.003,14.949-12.528,31.687-12.52,49.193c-0.018,26.791,10.587,51.56,27.921,71.332c17.18,19.619,40.892,34.622,68.298,43.411 c28.489,11.039,88.395,32.04,151.254,39.068l24.1,2.673l-26.312-58.804C468.344,397.532,481.93,385.274,492.092,370.848z M428.456,389.357l-11.716,5.997l16.602,37.108c-49.952-8.491-96.435-24.76-119.821-33.873l-0.424-0.163l-0.434-0.136 c-23.395-7.352-43.059-20.008-56.59-35.508c-13.558-15.555-21.047-33.639-21.065-53.068c0.009-12.746,3.234-24.841,9.241-36.105 c9.006-16.873,24.47-31.823,44.486-42.509c19.999-10.694,44.442-17.08,70.9-17.072c35.272-0.018,66.96,11.372,89.316,29.095 c11.192,8.853,20.044,19.24,26.051,30.486c6.016,11.264,9.24,23.359,9.25,36.105c-0.018,16.24-5.248,31.47-14.859,45.164 C459.79,368.545,445.726,380.523,428.456,389.357z"
							></path>{" "}
						</g>{" "}
					</g>
				</svg>
				<div className="contact-me align-self-center">CONTACT ME</div>
			</div>
		</header>
	);
};

export default Header;
