import React from "react";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import PageHeaderContent from "../../components/PageheaderContent/PageHeaderContent";
import "./experience.css";

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <PageHeaderContent
        headertext="My Resume"
        icon={<BsFillPersonLinesFill size={40} />}
      />

      <div className="section-container"> {/* Alignment wrapper */}
        <div className="timeline-container">
          {/* Experience Column */}
          <div className="timeline-column">
            <h3 className="timeline-title">EXPERIENCE</h3>

            <div className="timeline-item">
              <div className="timeline-icon">
                <FaBriefcase />
              </div>
              <div className="timeline-content">
                <h4>Software Engineer – Heeddata</h4>
                <p>Jul 2023 – Present</p>
                <p>
                  Developed scalable UI components and backend APIs for multi-cloud cost optimization.
                  Focused on seamless integrations with AWS, GCP, OCI, and Azure using full stack technologies.
                </p>
                <p className="tech">
                  <strong>Technologies:</strong> React.js, TypeScript, Redux Toolkit, Material UI, Node.js, MongoDB, SQL, Azure
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-icon">
                <FaBriefcase />
              </div>
              <div className="timeline-content">
                <h4>Software Engineer – Infolob Solutions</h4>
                <p>Jan 2023 – Jun 2023</p>
                <p>
                  Built dashboard interfaces and internal tools for multi-cloud insights.
                  Collaborated with DevOps and architects to improve UI performance and reduce load times.
                </p>
                <p className="tech">
                  <strong>Technologies:</strong> React.js, Material UI, Redux Toolkit, Node.js, MongoDB, SQL, Azure
                </p>
              </div>
            </div>
          </div>

          {/* Education Column */}
        <div className="timeline-column">
          <h3 className="timeline-title">EDUCATION</h3>

          {/* 10th Class */}
          <div className="timeline-item">
            <div className="timeline-icon">
              <FaGraduationCap />
            </div>
            <div className="timeline-content">
              <h4>Z.P. High School – Yadamari</h4>
              <p>
                Completed Secondary School Education (10th Standard) with distinction.
              </p>
              <p>Board of Secondary Education, Andhra Pradesh</p>
            </div>
          </div>

          {/* Intermediate */}
          <div className="timeline-item">
            <div className="timeline-icon">
              <FaGraduationCap />
            </div>
            <div className="timeline-content">
              <h4>Sri Chaitanya Junior College – Chittoor</h4>
              <p>
                Completed Intermediate (MPC) with focus on Mathematics, Physics, and Chemistry.
              </p>
              <p>Board of Intermediate Education, Andhra Pradesh</p>
            </div>
          </div>

          {/* B.Sc. in Computers */}
          <div className="timeline-item">
            <div className="timeline-icon">
              <FaGraduationCap />
            </div>
            <div className="timeline-content">
              <h4>B.Sc. in Computers – Vijayam Degree College</h4>
              <p>
                Specialized in Computer Science fundamentals, programming in JavaScript, and database concepts.
              </p>
              <p>Sri Venkateswara University</p>
            </div>
          </div>
        </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
