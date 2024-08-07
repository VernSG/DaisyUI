// src/components/LoadingScreen.jsx
import React, { useEffect } from 'react';
import anime from 'animejs';

const LoadingScreen = ({ onAnimationComplete }) => {
  useEffect(() => {
    // Setup Anime.js animation
    const ml4 = {
      opacityIn: [0, 1],
      scaleIn: [0.2, 1],
      scaleOut: 3,
      durationIn: 800,
      durationOut: 600,
      delay: 500
    };

    anime.timeline({ loop: true })
      .add({
        targets: '.ml4 .letters-1',
        opacity: ml4.opacityIn,
        scale: ml4.scaleIn,
        duration: ml4.durationIn
      }).add({
        targets: '.ml4 .letters-1',
        opacity: 0,
        scale: ml4.scaleOut,
        duration: ml4.durationOut,
        easing: "easeInExpo",
        delay: ml4.delay
      }).add({
        targets: '.ml4 .letters-2',
        opacity: ml4.opacityIn,
        scale: ml4.scaleIn,
        duration: ml4.durationIn
      }).add({
        targets: '.ml4 .letters-2',
        opacity: 0,
        scale: ml4.scaleOut,
        duration: ml4.durationOut,
        easing: "easeInExpo",
        delay: ml4.delay
      }).add({
        targets: '.ml4 .letters-3',
        opacity: ml4.opacityIn,
        scale: ml4.scaleIn,
        duration: ml4.durationIn
      }).add({
        targets: '.ml4 .letters-3',
        opacity: 0,
        scale: ml4.scaleOut,
        duration: ml4.durationOut,
        easing: "easeInExpo",
        delay: ml4.delay
      }).add({
        targets: '.ml4',
        opacity: 0,
        duration: 500,
        delay: 500
      });

    // Call the callback after the animation is complete
    setTimeout(onAnimationComplete, 4000); // Adjust delay as needed

  }, [onAnimationComplete]);

  return (
    <div className="loading-screen">
      <div className="moving-letters">
        <h1 className="ml4">
          <span className="letters letters-1">Ready</span>
          <span className="letters letters-2">Set</span>
          <span className="letters letters-3">Go!</span>
        </h1>
      </div>
    </div>
  );
};

export default LoadingScreen;
