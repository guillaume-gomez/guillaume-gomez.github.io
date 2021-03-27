import React, { useRef } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { useTranslation } from 'react-i18next';
import "./Skills.css";

const BackEndData = [
 "Ruby on Rails",
 "Node JS",
 "GraphQL",
 "Ruby",
 "Elixir",
 "Erlang",
 "Rust",
 "C++"
]

const FrontEndData = [
  "HTML5/CSS",
  "React 16.8",
  "Vue Js",
  "JQuery",
  "TypeScript",
  "Javascript (Es6)"
]

const ManagementData = ["SCRUM", "Sprint", "6 weeks cycle"];


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
    '#128293',
    '#0062cc',
    '#cc9a06'
    ]
  }],
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
      enabled: true,
      displayColors: false,
      bodyFontSize: 16,
      caretPadding: 1,
      borderWidth: 2,
      backgroundColor: "#000000FA",
      callbacks: {
        label: (tooltipItem: any) => {
          let data = [];
          if(tooltipItem.index === 0) {
            data = FrontEndData;
          }
          else if(tooltipItem.index === 1) {
            data = BackEndData;
          }
          else {
            data = ManagementData;
          }
          return data.map(item => `- ${item}`);
        }
      }
   },
};

function Skills() {
  const { t } = useTranslation();
  const ref = useRef(null);


  return (
    <section className="skills-content">
      <h2 className="skills-title">{t("skills.skills")}</h2>
      <div className="skills">
        <div className="skills-pie-chart">
          <Doughnut ref={ref} data={data} options={options} width={500} height={500}/>
        </div>
        <em>{t("skills.legend")}</em>
     </div>
    </section>
  );
}

export default Skills;