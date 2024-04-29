import React from 'react';
import { useTranslation } from 'react-i18next';
import { format } from 'date-fns'
import { fr, enGB } from 'date-fns/locale'
import Image from 'next/image';

interface SchoolInterface {
  begin: Date;
  end: Date;
  location: string;
  school: string;
  schoolUrl?: string;
  diploma: string;
  detail?: string;
  srcImage: string;
}

function School({begin, end, diploma, detail, school, schoolUrl, location, srcImage} : SchoolInterface) {
  const { t, i18n: {language} } = useTranslation();
  
  function formatDate(date: Date) {
    const locale = language === "fr" ? fr : enGB;
    return format(date, t("date-format"), { locale });
  }

  return (
    <div className="card w-96 bg-primary text-neutral-content">
      <div className="card-body items-center text-center">
        <div className="flex flex-col gap-2 items-center">
            <a href={schoolUrl}>
              <Image
                width={128}
                height={128}
                loading="lazy"
                className="rounded-xl"
                src={`/schools/${srcImage}`}
                alt="school where I studied"
              />
            </a>
            <a className="font-bold" href={schoolUrl}>
              {school}
            </a>
        </div>
        <div className="font-semibold">
          <div>{diploma}</div>
          <em>{detail}</em>
        </div>
        <div className="card-actions">
          <em>{formatDate(begin)} - {formatDate(end)}</em>
          <em>({location})</em>
        </div>
      </div>
    </div>
  );
}

export default School;
