import React, { useState, useEffect } from 'react';
import "../css/Scroll.css"

function Scroll() {

    const [fadeText, setFadeText] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const verticalLine = document.querySelector('.vertical-line');
            const text = document.querySelector('.scroll-text');

            const textRect = text.getBoundingClientRect();
            const lineRect = verticalLine.getBoundingClientRect();
            
            const buffer = 20;

            const distance = textRect.bottom - lineRect.top + buffer; 
            // console.log('Distance between text and line:', textRect.bottom, lineRect.top, distance);

            const opacity = 1 - (distance / textRect.height); // Adjust opacity based on distance
            text.style.opacity = opacity < 0 ? 0 : opacity; // Ensure opacity is not negative
    }
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  

    return (
        <div className='scroll-containter'>
            <div style={{height: "200px"}}></div>
            <div className="scroll-text-container">
                <div className={`scroll-text ${fadeText ? 'fade-out' : ''}`}>
                    Scroll
                </div>
            </div>
            <div className='vertical-line-container'>
                <div className="vertical-line"></div>
            </div>
            <div style={{height: "2000px"}}></div>
        </div>
    );
}

export default Scroll;