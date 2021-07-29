import React from 'react';
import "./SectionHeader.css";

interface SectionHeaderInterface {
  text: string;
}

function SectionHeader({text,} : SectionHeaderInterface) {
  return (
    <div className="section-header-container">
      <h2>{text}</h2>
      <hr />
    </div>
  );
}

export default SectionHeader;
