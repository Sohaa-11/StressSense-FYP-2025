import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';  // make sure you have Footer component
import brainRobot from '/heroSection.png'; // adjust path to your image
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <section className="hero">
        <div className="hero-content">
          <h1>
            Understand Your Stress, <br /> <span>Regain Your Calm.</span>
          </h1>
          <p>AI-powered stress detection for a healthier mind.</p>
          <button className="hero-btn" onClick={() => navigate('/upload')}>Start Your Analysis</button>
        </div>

        <div className="hero-image">
         <img src="/heroSection.png" alt="AI Brain Robot" />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
