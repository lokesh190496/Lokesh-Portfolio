import React from 'react';
import Typing from 'react-typing-effect';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div
      style={{
        position: 'relative',
        height: '100vh',
        color: '#FFD700',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div className="text-center text-light">
        <h1 className="text-warning mb-3">Hello, I'm Lokesh</h1>

        {/* Typing Text in separate block */}
        <div className="fs-4 mb-4">
          <Typing
            text={['Front End Developer', 'React Enthusiast', 'UI/UX Explorer']}
            speed={100}
            eraseSpeed={50}
            eraseDelay={1500}
            typingDelay={500}
          />
        </div>

        {/* Contact Button */}
        <button
          onClick={handleContactClick}
          className="btn btn-outline-warning mt-2"
        >
          Contact Me
        </button>
      </div>
    </div>
  );
};

export default Home;
