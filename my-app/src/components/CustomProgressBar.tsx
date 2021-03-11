import React from 'react';
import { ProgressBar } from 'react-bootstrap';

import "./CustomProgressBar.css";

interface CustomProgressBarInterface {
  label: string;
  value: number;
}

function CustomProgressBar({label, value} : CustomProgressBarInterface) {
  return (
    <div className="ProgressBar-content w-100">
      <div className="ProgressBar-label w-100">
        <h6>{label}</h6>
      </div>
      <div className="ProgressBar-value w-100">
         <ProgressBar now={value} />
      </div>
    </div>
  );
}

export default CustomProgressBar;
