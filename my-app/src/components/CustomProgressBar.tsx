import React from 'react';
import { ProgressBar } from 'react-bootstrap';

import "./CustomProgressBar.css";

interface CustomProgressBarInterface {
  label: string;
  value: number;
}

function CustomProgressBar({label, value} : CustomProgressBarInterface) {
  return (
    <div className="ProgressBar-content">
      <div className="ProgressBar-label">
        <h6>{label}</h6>
      </div>
      <div className="ProgressBar-value">
         <ProgressBar now={value} />
      </div>
    </div>
  );
}

export default CustomProgressBar;
