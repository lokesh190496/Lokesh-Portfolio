import React from 'react';
import './pageHeader.css';


const PageHeaderContent = ({ headertext, icon }) => {
  return (
    <div className="wrapper">
      <h2>{headertext}</h2>
      <span>{icon}</span>
    </div>
  );
};

export default PageHeaderContent;
