import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PageHeaderContent from '../../components/PageheaderContent/PageHeaderContent';
import { BsInfoCircleFill } from 'react-icons/bs';
import { Animate } from 'react-simple-animate';
import { FaDev, FaDatabase } from 'react-icons/fa';
import { DiAndroid, DiApple } from 'react-icons/di';
import './about.css';

const personalDetails = [
  { label: 'Name', value: 'Lokesh S D' },
  { label: 'Location', value: 'Hyderabad' },
  { label: 'Email', value: 'lokeshvasu63@gmail.com' },
];


const jobSummary =
  "Seasoned and independent Front End Developer with 3 years of experience in blending the art of design with skill of programming to deliver an immersive and engaging user experience through efficient website development, proactive feature optimization, and relentless debugging.";

const About = () => {
  return (
    <section id="about" className="about-section">
      <PageHeaderContent
        headertext="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <Container>
        <Row className="align-items-center">
          {/* LEFT COLUMN */}
          <Col md={6} className="mb-4">
            <Animate
              play
              duration={1.5}
              delay={0.5}
              start={{ transform: 'translateX(-900px)', opacity: 0 }}
              end={{ transform: 'translateX(0)', opacity: 1 }}
            >
              <h3 className="role-title">FrontEnd Developer</h3>
              <p className="job-summary">{jobSummary}</p>
            </Animate>

            <Animate
              play
              duration={1.5}
              delay={1}
              start={{ transform: 'translateX(-500px)', opacity: 0 }}
              end={{ transform: 'translateX(0)', opacity: 1 }}
            >
              <div className="personal-info">
                <h4 className="section-subtitle">Personal Information</h4>
                <ul>
                  {personalDetails.map((item, i) => (
                    <li key={i}>
                      <strong>{item.label}:</strong> {item.value}
                    </li>
                  ))}
                </ul>
              </div>
            </Animate>
          </Col>

          {/* RIGHT COLUMN: Rotating Icons */}
          <Col md={6}>
            <Animate
              play
              duration={1.5}
              delay={0.5}
              start={{ transform: 'translateX(600px)', opacity: 0 }}
              end={{ transform: 'translateX(0)', opacity: 1 }}
            >
              <div className="rotating-circle">
                <div className="orbit-icon one"><DiAndroid size={40} /></div>
                <div className="orbit-icon two"><FaDatabase size={40} /></div>
                <div className="orbit-icon three"><DiApple size={40} /></div>
                <div className="orbit-icon four"><FaDev size={40} /></div>
              </div>
            </Animate>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
