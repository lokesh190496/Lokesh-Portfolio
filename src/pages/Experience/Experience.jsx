import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import { FaBriefcase } from "react-icons/fa";
import PageHeaderContent from "../../components/PageheaderContent/PageHeaderContent";
import "./experience.css";

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <PageHeaderContent
        headertext="My Resume"
        icon={<BsInfoCircleFill size={40} />}
      />

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
                Heeddata is a multi-cloud cost optimization platform for AWS,
                GCP, OCI, and Azure.
              </p>
              <p className="tech">
                <strong>Technologies:</strong> React.js, TypeScript, Redux
                Toolkit, Material UI, Node.js, MongoDB, SQL, Azure
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
                CloudMonk is a multi-cloud cost optimization platform for cloud
                recommendations.
              </p>
              <p className="tech">
                <strong>Technologies:</strong> React.js, Material UI, Redux
                Toolkit, Node.js, MongoDB, SQL, Azure
              </p>
            </div>
          </div>
        </div>

        {/* Education Column */}
        <div className="timeline-column">
          <h3 className="timeline-title">EDUCATION</h3>

          <div className="timeline-item">
            <div className="timeline-icon">
              <FaBriefcase />
            </div>
            <div className="timeline-content">
              <h4>B.Sc. in Computers – Vijayam Degree College</h4>
              <p>2014 – 2017</p>
              <p>Sri Venkateswara University</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">
              <FaBriefcase />
            </div>
            <div className="timeline-content">
              <h4>Full Stack Certification – Pro Stack Academy</h4>
              <p>2022</p>
              <p>JavaScript, React, Node.js, MongoDB</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
