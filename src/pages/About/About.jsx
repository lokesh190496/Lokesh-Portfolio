import React from 'react';
import PageHeaderContent from '../../components/PageheaderContent/PageHeaderContent';
import { BsInfoCircleFill } from 'react-icons/bs';

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headertext="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
    </section>
  );
};

export default About;
