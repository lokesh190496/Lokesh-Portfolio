import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PageHeaderContent from '../../components/PageheaderContent/PageHeaderContent';
import { BsInfoCircleFill } from 'react-icons/bs';
import { Animate } from 'react-simple-animate';

import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDatabase
} from 'react-icons/fa';
import { VscVscode } from "react-icons/vsc";
import { SiGooglechrome } from "react-icons/si";
import { DiAndroid } from 'react-icons/di';

import './about.css';

const personalDetails = [
  { label: 'Name', value: 'S D Lokesh' },
  { label: 'Location', value: 'Hyderabad, India' },
  { label: 'Email', value: 'lokeshvasu63@gmail.com' },
];

const jobSummary =
  "Seasoned Front-End Developer with 3+ years of experience crafting dynamic, responsive, and user-focused web applications. Adept at blending creativity with technical precision to deliver intuitive digital experiences that perform flawlessly across devices.";

const keySkills = [
  "React.js & JavaScript (ES6+)",
  "Responsive UI/UX Development",
  "REST API Integration",
  "Redux & State Management",
  "Cross-Browser Optimization"
];

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
              <h3 className="role-title">Front-End Developer</h3>
              <p className="tagline">
                Turning complex ideas into seamless digital experiences.
              </p>
              <p className="job-summary">{jobSummary}</p>

              <div className="skills-section">
                <h4 className="section-subtitle">Key Skills</h4>
                <ul className="skills-list">
                  {keySkills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
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

          {/* RIGHT COLUMN: Combined rotating icons */}
          <Col md={6}>
            <Animate
              play
              duration={1.5}
              delay={0.5}
              start={{ transform: 'translateX(600px)', opacity: 0 }}
              end={{ transform: 'translateX(0)', opacity: 1 }}
            >
              <div className="rotating-circle">
                {/* Center icon */}
                <div className="center-icon">
                  <FaReact size={60} color="#61DBFB" />
                </div>

                {/* Outer orbit icons */}
                <div className="orbit-icon one"><FaNodeJs size={40} color="#68A063" /></div>
                <div className="orbit-icon two"><FaHtml5 size={40} color="#E44D26" /></div>
                <div className="orbit-icon three"><FaJs size={40} color="#F0DB4F" /></div>
                <div className="orbit-icon four"><FaCss3Alt size={40} color="#264de4" /></div>
                <div className="orbit-icon five"><VscVscode size={40} color="#007ACC" /></div>
                <div className="orbit-icon six"><SiGooglechrome size={40} color="#4285F4" /></div>
                <div className="orbit-icon seven"><DiAndroid size={40} color="#3DDC84" /></div>
                <div className="orbit-icon eight"><FaDatabase size={40} color="#f29111" /></div>
              </div>
            </Animate>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
