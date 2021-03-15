import React, { useRef } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { useTranslation } from 'react-i18next';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faRunning, faMusic, faFilm } from '@fortawesome/free-solid-svg-icons';

import "./Skills.css";
const data = {
  labels: [
      'Front End',
      'Back-End',
      'Management',
  ],
  datasets: [{
    data: [1.5, 1, 0.33],
    backgroundColor: [
    '#17a2b8',
    '#007bff',
    '#ffc107'
    ],
    hoverBackgroundColor: [
    '#17a2b8',
    '#007bff',
    '#ffc107'
    ]
  }]
};

const  options = {
  plugins: {
    datalabels: {
      // use the formatter function to customize the labels displayed
      formatter: function(value:any, context:any) {
        return context.chart.data.labels[context.dataIndex];
      },
      color: "white",
      align: "top",
      anchor: "center",
      clip: true,
      font: {
        size: "16",
        weight: "bold"
      }
    }
  },
  legend: {
      display: false
   }, tooltips: {
      enabled: false
   }
};

function Skills() {
  const { t } = useTranslation();
  const ref = useRef(null);


  return (
    <section className="skills-content">
      <h2 className="skills-title">{t("skills.skills")}</h2>
      
      <div className="skills-stats">
        <div className="skills-progress-bars">
          <div className="skills-progress-bars-content">
            <h3>Front-End</h3>
            <p>HTML5/CSS</p>
            <p>React 16.8</p>
            <p>JQuery</p>
            <h3>Back-End</h3>
            <p>Ruby on Rails</p>
            <p>Node JS</p>
            <p>GraphQL</p>
            <h3>Languages</h3>
            <p>Javascript (Es6) </p>
            <p>TypeScript</p>
            <p>Ruby</p>
            <p>C++</p>
            <p>Rust</p>
            <p>Elixir</p>
            <p>Erlang</p>
          </div>
        </div>
        <div className="skills-pie-chart">
          <Doughnut ref={ref} data={data} options={options}/>
        </div>
      </div>
    </section>
  );
}

export default Skills;