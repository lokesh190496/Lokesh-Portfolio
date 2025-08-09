import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // Import the new CSS file

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-wrapper">

      <div className="hero-container">
        <h1 className="hero-title">HELLO, I'M LOKESH</h1>
        <h2 className="hero-subtitle">Front End Developer</h2>
        <button className="hero-btn" onClick={() => navigate('/contact')}>
          Contact Me
        </button>
      </div>
    </div>
  );
};

export default Home;
