import React from 'react';
import "./Experience.css";
import Timeline from "./Timeline";
import Job from "./Job";

function Experience() {
  return (
    <div className="experience-content">
      <h2 className="experience-title">Experience</h2>
      <div className="experience-jobs">
        <Timeline>
          <Job company={"Amuse"} begin={"2019"} end={"2020"} jobTitle="Sofware Ingineer" jobDescription="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."/>
          <Job company={"Amuse"} begin={"2019"} end={"2020"} jobTitle="Sofware Ingineer" jobDescription="Ceci est une test"/>
          <Job company={"Amuse"} begin={"2019"} end={"2020"} jobTitle="Sofware Ingineer" jobDescription="Ceci est une test"/>
        </Timeline>
      </div>
    </div>
  );
}

export default Experience;
