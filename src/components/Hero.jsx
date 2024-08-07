// src/components/Hero.jsx
import React from 'react';
import Card from '../cards/CardGlass'; // Pastikan jalur impor benar

function Hero() {
  return (
    <div
      className="hero min-h-screen flex items-center justify-center relative"
      style={{
        backgroundImage: "url(https://res.cloudinary.com/djsdnb4td/image/upload/v1722986757/Lofi_Cat_Cozy_Gamer_Mouse_Matt_Wallpaper___16_9_ufhpzg.jpg)",
        backgroundSize: 'cover', // Cover the whole hero section
        backgroundPosition: 'center', // Center the background image
      }}
    >
      <div className="hero-overlay bg-opacity-60 absolute inset-0"></div>
      <div className="hero-content text-neutral-content text-center z-10 p-10">
        <Card />
      </div>
    </div>
  );
}

export default Hero;
