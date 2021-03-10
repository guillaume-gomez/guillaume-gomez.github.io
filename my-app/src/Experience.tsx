import React from 'react';
import "./Experience.css";
import Timeline from "./Timeline";
import Job from "./Job";

function Experience() {
  return (
    <div className="experience-content">
      <h2>Experience</h2>
      <div className="experience-jobs">
        <Timeline>
          <Job />
          <Job />
          <Job />
        </Timeline>
      </div>
    </div>
  );
}

export default Experience;
