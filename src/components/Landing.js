import React from "react";
import Rectangle from "./Rectangle";
import Scroll from "./Scroll";
import "../css/Landing.css";

const Landing = () => {
	return (
		<div className="landing landing-container">
			<div className="row">
				<div className="col-md-6 text-left welcome">
					<h1>
						Hi, I'm <b>Charlie</b>
					</h1>
					<p>
						I'm a developer from <br></br> Sydney, New York, and
						Shanghai
					</p>
				</div>
				<div className="col-md-8 d-flex justify-content-center align-items-center p-0 rectangle">
					<Rectangle />
				</div>
			</div>
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<Scroll />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Landing;
