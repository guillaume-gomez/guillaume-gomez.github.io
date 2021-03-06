import React from 'react';
import ReactDOM from 'react-dom';

import './fonts/Inconsolata-VariableFont_wdth,wght.ttf';
import './fonts/Roboto-Regular.ttf';

import './index.css';
// labels for react chartjs plugin
import 'chartjs-plugin-datalabels';

import "./i18n";

import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
