import React from 'react';
import "./Timeline.css";

interface TimelineInterface {
  children: React.ReactNode;
}

function Timeline({children}: TimelineInterface) {
  return (
    <div className="timeline">
    <div>
      {children}
    </div>
    </div>
  );
}

export default Timeline;