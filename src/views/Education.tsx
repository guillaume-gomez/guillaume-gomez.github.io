import React from 'react';
import { useTranslation } from 'react-i18next';
import School from "../components/School";
import SectionHeader from "../components/SectionHeader";
import FadeInWhenVisible from "../components/animations/FadeInWhenVisible";


import "./Education.css";

function Education() {
  const { t } = useTranslation();
  return (
    <div className="education-content">
      <SectionHeader text={t("education.education")} />
        <div className="education-container">
          <FadeInWhenVisible>
            <School
              school={t("education.u_t_c.company")}
              schoolUrl="https://www.utc.fr/"
              location={t("education.u_t_c.location")}
              begin={new Date(2012,8,1)}
              end={new Date(2015,1,1)}
              diploma={t("education.u_t_c.job-title")}
              detail={t("education.u_t_c.bloc1")}
              srcImage={"utc.jpg"}
              />
            </FadeInWhenVisible>
            <FadeInWhenVisible>
              <School
              school={t("education.i_u_t.company")}
              schoolUrl="https://iut.univ-amu.fr/sites/arles"
              location={t("education.i_u_t.location")}
              begin={new Date(2010,8,1)}
              end={new Date(2012,5,1)}
              diploma={t("education.i_u_t.job-title")}
              detail={t("education.i_u_t.bloc1")}
              srcImage={"IUT.png"}
              />
            </FadeInWhenVisible>
        </div>
    </div>
  );
}

export default Education;
