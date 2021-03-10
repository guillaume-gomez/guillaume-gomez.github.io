import React from 'react';
import { useTranslation } from 'react-i18next';
import { format } from 'date-fns'
import { fr, enGB } from 'date-fns/locale'

import { Card } from 'react-bootstrap';

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
    const locale = language == "fr" ? fr : enGB;
    return format(date, t("date-format"), { locale });
  }

  return (
     <div className="job-container job-right">
       <Card
          bg="dark"
          text="light"
          className="job-content"
        >
          <Card.Header>
            <div className="job-card-header">
              { companyUrl ?
                <a href={companyUrl}>{company}</a> :
                company
              }
              <em>{location}</em>
            </div>
          </Card.Header>
          <Card.Body>
            <Card.Title>{jobTitle}</Card.Title>
            <Card.Text>
              {jobDescription ? jobDescription : children}
            </Card.Text>
          </Card.Body>
           <Card.Footer className="text-muted">{formatDate(begin)} - {formatDate(end)}</Card.Footer>
        </Card>
    </div>
  );
}

export default Job;
