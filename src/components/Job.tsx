import React from 'react';
import { useTranslation } from 'react-i18next';
import { format } from 'date-fns'
import { fr, enGB } from 'date-fns/locale'
import FadeInSection from "./FadeInSection";
import Image from 'next/image';

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
  imgSrc: string
}

function Job({begin, end, jobTitle, jobDescription, company, companyUrl, location, children, imgSrc} : JobInterface) {
  const { t, i18n: {language} } = useTranslation();
  
  function formatDate(date: Date) {
    const locale = language === "fr" ? fr : enGB;
    return format(date, t("date-format"), { locale });
  }

  return (
    <FadeInSection>
      <div className="job-container job-right">
        <div className="card w-100 bg-primary text-primary-content">
          <div className="card-body">
            <div className="flex flex-row justify-between">
              <h2 className="card-title">
                {jobTitle}
              </h2>
              { companyUrl ?
                <a className="link" href={companyUrl}>{company}</a> :
                <span className="pr-2">{ company }</span>
              }
            </div>

            <div className="flex flex-row gap-2">
              { companyUrl ?
                  <a href={companyUrl}>
                    <Image
                      width={128}
                      height={128}
                      loading="lazy"
                      className="rounded-xl"
                      src={`/companies/${imgSrc}`}
                      alt={`${company} is a company that I have worked for`}
                    />
                </a>
                :
                  <div>
                  <Image
                    width={128}
                    height={128}
                    loading="lazy"
                    className="rounded-xl"
                    src={`/companies/${imgSrc}`}
                    alt={`A company that I have worked for`}
                  />
                  </div>
                }

                <div className="flex flex-col gap-3 w-full justify-end">
                  <div style={{lineHeight: 1.75}}>
                    {jobDescription ? jobDescription : children}
                  </div>
                  <div className="flex flex-row justify-between">
                    <em>{formatDate(begin)} - {formatDate(end)}</em>
                    <em>({location})</em>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
     </FadeInSection>
  );
}

export default Job;
