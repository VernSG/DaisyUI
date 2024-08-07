// src/components/LoadingAnimation.jsx
import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

const LoadingAnimation = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    anime({
      targets: svgRef.current.querySelectorAll('path'),
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: 2000,
      easing: 'easeInOutSine',
      delay: (el, i) => i * 250,
      direction: 'alternate',
      loop: true,
    });
  }, []);

  return (
    <div className="loading-container">
      <span ref={svgRef}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          viewBox="0 0 100 100"
        >
          {/* SVG Path here */}
          <path
            fill="none"
            stroke="#ffffff"
            strokeWidth="2"
            d="M50,14c19.85,0,36,16.15,36,36S69.85,86,50,86S14,69.85,14,50S30.15,14,50,14 M50,10c-22.091,0-40,17.909-40,40 s17.909,40,40,40s40-17.909,40-40S72.091,10,50,10L50,10z"
          />
          {/* Additional paths and animations */}
        </svg>
      </span>
      <p>The clock is ticking, please take a moment</p>
    </div>
  );
};

export default LoadingAnimation;
