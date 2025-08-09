import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaMicrosoft,
  FaReact,
  FaJs,
  FaGitAlt,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaBootstrap,
} from "react-icons/fa";
import { SiRedux, SiMui, SiMongodb } from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";

import "./skills.css"; // Ensure this file is present
import PageHeaderContent from "../../components/PageheaderContent/PageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";

const skillsData = [
  { name: "React.js", icon: <FaReact />, color: "#61DAFB" },
  { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
  { name: "Redux", icon: <SiRedux />, color: "#764ABC" },
  { name: "Material UI", icon: <SiMui />, color: "#0081CB" },
  { name: "Bootstrap", icon: <FaBootstrap />, color: "#7952B3" },
  { name: "HTML", icon: <FaHtml5 />, color: "#E34F26" },
  { name: "CSS", icon: <FaCss3Alt />, color: "#1572B6" },
  { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#4DB33D" },
  { name: "SQL", icon: <FaDatabase />, color: "#00758F" },
  { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
  { name: "GitHub", icon: <FaGitAlt />, color: "#181717" },
  { name: "Microsoft Azure", icon: <FaMicrosoft />, color: "#0078D4" },
  { name: "VS Code", icon: <DiVisualstudio />, color: "#007ACC" },
];

const Skills = () => (
  <section id="skills" className="skills-section">
          <PageHeaderContent
        headertext=" My Skills"
        icon={<BsInfoCircleFill size={40} />}
      />
    <Container>
      <Row className="justify-content-center">
        {skillsData.map((skill, index) => (
          <Col
            key={index}
            xs={6}
            sm={4}
            md={3}
            lg={2}
            className="mb-4 d-flex justify-content-center"
          >
            <div className="skill-card" style={{ "--hover-glow": skill.color }}>
              <div className="skill-box" style={{ color: skill.color }}>
                <div className="skill-icon-wrapper">
                  <div className="skill-icon-circle">
                    <span className="skill-icon">{skill.icon}</span>
                  </div>
                </div>
                <p className="skill-name">{skill.name}</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

export default Skills;
