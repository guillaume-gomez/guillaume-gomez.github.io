import React from 'react';
import { useTranslation } from 'react-i18next';
import Timeline from "../components/Timeline";
import Job from "../components/Job";

import "./Experience.css";

function Experience() {
  const { t } = useTranslation();
  return (
    <div className="experience-content">
      <h2 className="experience-title">{t("experience.experience")}</h2>
      <div className="experience-jobs">
        <Timeline>
          <Job 
            company={t("experience.amuse.company")}
            companyUrl="https://www.amuseanimation.com/"
            location={t("experience.amuse.location")}
            begin={new Date(2019,1,1)}
            end={new Date()}
            jobTitle={t("experience.amuse.job-title")}
            >
              <p>{t("experience.amuse.bloc1")}</p>
              <p>{t("experience.amuse.bloc2")}</p>
              <p>{t("experience.amuse.bloc3")}</p>
              <ul>
                <li>{t("experience.amuse.bloc4")}</li>
                <li>{t("experience.amuse.bloc5")}</li>
              </ul>
              <p>{t("experience.amuse.bloc6")}</p>
            </Job>
            <Job
            company={t("experience.amuse.company")}
            companyUrl="https://www.amuseanimation.com/"
            location={t("experience.amuse.location")}
            begin={new Date(2017,10,1)}
            end={new Date(2019,1,1)}
            jobTitle={t("experience.amuse.job-title-2")}
            >
              <p>{t("experience.amuse.bloc1-1")}</p>
              <ul>
                <li>{t("experience.amuse.bloc1-2")}</li>
                <li>{t("experience.amuse.bloc1-3")}</li>
                <li>{t("experience.amuse.bloc1-4")}</li>
                <li>{t("experience.amuse.bloc1-5")}</li>
             </ul>
             <p>{t("experience.amuse.bloc1-6")}</p>
             <ul>
                <li>{t("experience.amuse.bloc1-7")}</li>
                <li>{t("experience.amuse.bloc1-8")}</li>
             </ul>

            </Job>
            <Job
            company={t("experience.applidget.company")}
            companyUrl="https://www.eventmaker.com/"
            location={t("experience.applidget.location")}
            begin={new Date(2015,7,1)}
            end={new Date(2017,10,1)}
            jobTitle={t("experience.applidget.job-title")}
            >
              <p>{t("experience.applidget.bloc")}</p>
            </Job>
           <Job
            company={t("experience.masa.company")}
            companyUrl="https://masasim.com/"
            location={t("experience.masa.location")}
            begin={new Date(2015,1,1)}
            end={new Date(2017,5,1)}
            jobTitle={t("experience.masa.job-title")}
            >
              <p>{t("experience.masa.bloc")}</p>
           </Job>
           <Job
            company={t("experience.multiposting.company")}
            location={t("experience.multiposting.location")}
            begin={new Date(2014,1,1)}
            end={new Date(2013,8,1)}
            jobTitle={t("experience.multiposting.job-title")}
            >
              <ul>
                <li>{t("experience.multiposting.bloc1")}</li>
                <li>{t("experience.multiposting.bloc2")}</li>
              </ul>
           </Job>
           <Job
            company={t("experience.arles.company")}
            location={t("experience.arles.location")}
            begin={new Date(2012,3,1)}
            end={new Date(2012,1,1)}
            jobTitle={t("experience.arles.job-title")}
            >
              <ul>
                <li>{t("experience.arles.bloc1")}</li>
                <li>{t("experience.arles.bloc2")}</li>
              </ul>
           </Job>

        </Timeline>
      </div>

      <h2 className="experience-title">{t("education.education")}</h2>
      <div className="experience-jobs">
        <Timeline>
          <Job 
            company={t("education.u_t_c.company")}
            companyUrl="https://www.utc.fr/"
            location={t("education.u_t_c.location")}
            begin={new Date(2015,1,1)}
            end={new Date(2012,8,1)}
            jobTitle={t("education.u_t_c.job-title")}
            >
              gdklmgkdfkl
            </Job>
            <Job
            company={t("education.i_u_t.company")}
            companyUrl="https://iut.univ-amu.fr/sites/arles"
            location={t("education.i_u_t.location")}
            begin={new Date(2010,8,1)}
            end={new Date(2012,5,1)}
            jobTitle={t("education.i_u_t.job-title")}
            >
              jdsklfjdjfkljdj
            </Job>
        </Timeline>
      </div>
    </div>
  );
}

export default Experience;
