import React from 'react';
import { useTranslation } from 'react-i18next';
import { format } from 'date-fns'
import { fr, enGB } from 'date-fns/locale'
import FadeInSection from "./FadeInSection";

import "./Job.css";

interface JobInterface {
  begin: Date;
  end: Date;
  location: string;
  company: string;
  companyUrl?: string;
  jobTitle: string;
  jobDescription?: string;
  children?: React.ReactNode;
}

function Job({begin, end, jobTitle, jobDescription, company, companyUrl, location, children} : JobInterface) {
  const { t, i18n: {language} } = useTranslation();
  
  function formatDate(date: Date) {
    const locale = language === "fr" ? fr : enGB;
    return format(date, t("date-format"), { locale });
  }

  return (
    <FadeInSection>
       <div className="job-container job-right">
         <div
            className="job-content"
          >
            <div className="job-header">
                <h5>{jobTitle}</h5>
                <div> 
                { companyUrl ?
                  <a className="underline-link job-company job-company-name" href={companyUrl}>{company}</a> :
                  <span className="job-company-name">{ company }</span>
                }
              </div>
            </div>
            <div className="job-image">
              <a href={companyUrl}>
                <img style={{"borderRadius": "9px"}} src="https://picsum.photos/256/256" />
              </a>
            </div>
            <div className="job-body">
              <div className="job-body-content">
                {jobDescription ? jobDescription : children}
              </div>
            </div>

            <div className="job-footer">
              <em>{formatDate(begin)} - {formatDate(end)}</em>
              <em>({location})</em>
            </div>
          </div>
      </div>
    </FadeInSection>
  );
}

export default Job;
