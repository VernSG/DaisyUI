// src/App.jsx
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Text from './components/Text';
import LoadingScreen from './components/LoadingScreen';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  const handleAnimationComplete = () => {
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <LoadingScreen onAnimationComplete={handleAnimationComplete} />
      ) : (
        <div>
          <Navbar />
          <Hero />
          <Text />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
