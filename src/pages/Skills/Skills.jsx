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
  FaTools,
  FaCode,
  FaCogs,
  FaLightbulb,
} from "react-icons/fa";
import { SiRedux, SiMui, SiMongodb } from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";

import "./skills.css";
import PageHeaderContent from "../../components/PageheaderContent/PageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { GiSkills } from "react-icons/gi";

const skillsData = [
  { name: "React.js", icon: FaReact, color: "#3b82f6", level: 90 },
  { name: "JavaScript", icon: FaJs, color: "#facc15", level: 85 },
  { name: "Redux", icon: SiRedux, color: "#7c3aed", level: 70 },
  { name: "Material UI", icon: SiMui, color: "#0081CB", level: 75 },
  { name: "Bootstrap", icon: FaBootstrap, color: "#7952B3", level: 70 },
  { name: "HTML", icon: FaHtml5, color: "#e44d26", level: 95 },
  { name: "CSS", icon: FaCss3Alt, color: "#1572B6", level: 90 },
  { name: "Node.js", icon: FaNodeJs, color: "#339933", level: 65 },
  { name: "MongoDB", icon: SiMongodb, color: "#4DB33D", level: 60 },
  { name: "SQL", icon: FaDatabase, color: "#00758F", level: 60 },
  { name: "Git", icon: FaGitAlt, color: "#f05032", level: 85 },
  { name: "GitHub", icon: FaGitAlt, color: "#181717", level: 80 },
  { name: "Microsoft Azure", icon: FaMicrosoft, color: "#0078D4", level: 50 },
  { name: "VS Code", icon: DiVisualstudio, color: "#007ACC", level: 90 },
];

const Skills = () => (
  <section id="skills" className="skills-section">
<PageHeaderContent
  headertext="My Skills"
  icon={<FaCogs      size={40} color="#61dafb" />} // skill-related icon with nice color
/>
<Container>
  <Row className="justify-content-center">
    {skillsData.map(({ name, icon: Icon, color, level }, index) => (
      <Col
        key={index}
        xs={6}
        sm={4}
        md={3}
        lg={2}
        className="mb-4 d-flex justify-content-center"
      >
        <div
          className="skill-card"
          tabIndex={0}
          aria-label={`Skill: ${name}, proficiency level: ${level} percent`}
          title={`${name} - Proficiency: ${level}%`}
        >
          <div className="skill-icon-circle" style={{ backgroundColor: `${color}22` }}>
            <Icon className="skill-icon" style={{ color }} />
          </div>
          <p className="skill-name">{name}</p>
          <div className="skill-progress">
            <div
              className="skill-progress-bar"
              style={{ width: `${level}%`, backgroundColor: color }}
            ></div>
          </div>
        </div>
      </Col>
    ))}
  </Row>
</Container>

  </section>
);

export default Skills;