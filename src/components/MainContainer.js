// MainContainer.js

import React from 'react';
import '../css/MainContainer.css'; // Assuming you will also create a CSS file for this component

function MainContainer({ children }) {
  return <div className="main-container">{children}</div>;
}

export default MainContainer;
