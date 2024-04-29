import React from 'react';
import { useTranslation } from 'react-i18next';
import Timeline from "../components/Timeline";
import Job from "../components/Job";
import SectionHeader from "../components/SectionHeader";

import "./Experience.css";

function Experience() {
  const { t } = useTranslation();
  return (
    <div>
      <SectionHeader text={t("experience.experience")} />
      <div className="experience-jobs">
        <Timeline>
          <Job 
            company={t("experience.ecotree.company")}
            companyUrl="https://www.ecotree.green/"
            location={t("experience.ecotree.location")}
            begin={new Date(2022,0,1)}
            end={new Date()}
            jobTitle={t("experience.ecotree.job-title")}
            imgSrc={"ecotree.jpg"}
            >
              <p>{t("experience.ecotree.context")}</p>
              <p>{t("experience.ecotree.bloc1")}</p>
              <ul>
                <li>{t("experience.ecotree.bloc2")}</li>
                <li>{t("experience.ecotree.bloc3")}</li>
                <li>{t("experience.ecotree.bloc4")}</li>
                <li>{t("experience.ecotree.bloc5")}</li>
              </ul>

              <p>{t("experience.ecotree.bloc1-1")}</p>
              <ul>
                <li>{t("experience.ecotree.bloc1-2")}</li>
                <li>{t("experience.ecotree.bloc1-3")}</li>
                <li>{t("experience.ecotree.bloc1-4")}</li>
                <li>{t("experience.ecotree.bloc1-5")}</li>
                <li>{t("experience.ecotree.bloc1-6")}</li>
              </ul>
          </Job>
          
          <Job 
            company={t("experience.amuse.company")}
            companyUrl="https://www.amuseanimation.com/"
            location={t("experience.amuse.location")}
            begin={new Date(2019,1,1)}
            end={new Date(2021, 11, 1)}
            jobTitle={t("experience.amuse.job-title")}
            imgSrc={"amuse.jpg"}
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
            imgSrc={"amuse.jpg"}
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
            imgSrc={"eventmaker.jpg"}
            >
              <p>{t("experience.applidget.bloc")}</p>
           </Job>
           
           <Job
            company={t("experience.masa.company")}
            companyUrl="https://masasim.com/"
            location={t("experience.masa.location")}
            begin={new Date(2015,1,1)}
            end={new Date(2015,5,1)}
            jobTitle={t("experience.masa.job-title")}
            imgSrc={"masa.png"}
            >
              <p>{t("experience.masa.bloc")}</p>
           </Job>
           
           <Job
            company={t("experience.multiposting.company")}
            location={t("experience.multiposting.location")}
            begin={new Date(2014,1,1)}
            end={new Date(2013,8,1)}
            jobTitle={t("experience.multiposting.job-title")}
            imgSrc={`multiposting.jpg`}
            >
              <p>{t("experience.multiposting.bloc1")}</p>
              <p>{t("experience.multiposting.bloc2")}</p>
           </Job>
           
           <Job
            company={t("experience.arles.company")}
            location={t("experience.arles.location")}
            begin={new Date(2012,3,1)}
            end={new Date(2012,1,1)}
            jobTitle={t("experience.arles.job-title")}
            imgSrc={"Arles_logo.png"}
            >
            <p>{t("experience.arles.bloc1")}</p>
            <p>{t("experience.arles.bloc2")}</p>
           </Job>

        </Timeline>
      </div>
    </div>
  );
}

export default Experience;
