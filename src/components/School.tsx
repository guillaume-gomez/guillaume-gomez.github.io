import React from 'react';
import { useTranslation } from 'react-i18next';
import { format } from 'date-fns'
import { fr, enGB } from 'date-fns/locale'
import FadeInSection from "./FadeInSection";

import "./School.css";

interface SchoolInterface {
  begin: Date;
  end: Date;
  location: string;
  school: string;
  schoolUrl?: string;
  diploma: string;
  detail?: string;
}

function School({begin, end, diploma, detail, school, schoolUrl, location} : SchoolInterface) {
  const { t, i18n: {language} } = useTranslation();
  
  function formatDate(date: Date) {
    const locale = language === "fr" ? fr : enGB;
    return format(date, t("date-format"), { locale });
  }

  return (
    <div className="school-container">
      <div className="school-image-container">
        <a href={schoolUrl}>
          <img style={{"borderRadius": "10px"}} src="https://picsum.photos/96/96" />
        </a>
        <a href={schoolUrl}>
          {school}
        </a>
      </div>
      <div className="school-title-container">
        <div>{diploma}</div>
        <em>{detail}</em>
      </div>
      <div className="school-detail-container">
        <em>{formatDate(begin)} - {formatDate(end)}</em>
        <em>({location})</em>
      </div>
    </div>
  );
}

export default School;
