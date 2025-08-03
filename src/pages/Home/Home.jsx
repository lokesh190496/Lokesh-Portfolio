import React from 'react';
import Typing from 'react-typing-effect';
import { useNavigate } from 'react-router-dom';
import { Animate } from 'react-simple-animate';
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

        {/* Animate typing text */}
        <Animate
          play
          duration={1.5}
          delay={0.3}
          start={{ transform: 'translateX(-300px)', opacity: 0 }}
          end={{ transform: 'translateX(0)', opacity: 1 }}
        >
          <div className="fs-4 mb-4">
            <Typing
              text={['Front End Developer', 'React Enthusiast', 'UI/UX Explorer']}
              speed={100}
              eraseSpeed={50}
              eraseDelay={1500}
              typingDelay={500}
            />
          </div>
        </Animate>

        {/* Animate button */}
        <Animate
          play
          duration={1.5}
          delay={1}
          start={{ transform: 'translateY(100px)', opacity: 0 }}
          end={{ transform: 'translateY(0)', opacity: 1 }}
        >
          <button
            onClick={handleContactClick}
            className="btn btn-outline-warning mt-2"
          >
            Contact Me
          </button>
        </Animate>
      </div>
    </div>
  );
};

export default Home;
