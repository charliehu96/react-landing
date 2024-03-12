import React from "react";

function Rectangle() {
	return (
		<svg width="100%" height="100%">
			<defs>
				{/* Define a pattern with parallel lines at a 45-degree angle */}
				<pattern
					id="parallelLinesPattern"
					width="9"
					height="10"
					patternTransform="rotate(45 0 0)"
					patternUnits="userSpaceOnUse"
				>
					{/* Change the color of the lines to #aadcec */}
					<line
						x1="0"
						y1="0"
						x2="0"
						y2="10"
						stroke="#d2ecf5"
						strokeWidth="6"
					/>
				</pattern>
			</defs>
			{/* Create a rectangle filled with the parallel lines pattern */}
			<rect
				width="100%"
				height="100%"
				fill="url(#parallelLinesPattern)"
			/>
		</svg>
	);
}

export default Rectangle;
