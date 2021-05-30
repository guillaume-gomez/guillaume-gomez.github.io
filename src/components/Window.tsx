import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import "./Window.css";


interface WindowInterface {
  minHeight?: number | string;
  backgroundColor: string;
  children?: React.ReactNode;
}

function Window({minHeight = 0, backgroundColor, children} : WindowInterface) {
  return (
    <div className="scale-up-center" style={{width: "100%", minHeight }}>
      <div style={{ background: "#d6d6d6", height: "30px", width: "100%", borderRadius: "10px 10px 0 0"}}>
        <div style={{ gap: "5px", display: "flex", flexDirection: "row-reverse", alignItems: "center", width:'98%', height:'100%'}}>
          <FontAwesomeIcon icon={faCircle} size="xs" color="#ff6159"/>
          <FontAwesomeIcon icon={faCircle} size="xs" color="#ffc130"/>
          <FontAwesomeIcon icon={faCircle} size="xs" color="#2acd43"/>
        </div>
      </div>
      <div className="window-content" style={{
        borderRadius: "0 0 10px 10px",
        width: "100%",
        height: "calc(100% - 30px)",
        backgroundColor
        }}>
        {children}
      </div>
    </div>
  );
}

export default Window;
