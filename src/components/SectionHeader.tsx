import React from 'react';
import "./SectionHeader.css";

interface SectionHeaderInterface {
  text: string;
}

function SectionHeader({text} : SectionHeaderInterface) {
  return (
    <div className="md:pt-16 md:pb-12 pt-8 pt-6">
      <h2 className="text-4xl font-extrabold">{text}</h2>
      <hr />
    </div>
  );
}

export default SectionHeader;
