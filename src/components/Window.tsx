import React from 'react';
import "./Window.css";

interface WindowInterface {
  width?: number | string;
  height?: number | string;
  backgroundColor: string;
  children?: React.ReactNode;
}

function Window({width = 0, height = 0, backgroundColor, children} : WindowInterface) {
  return (
    <div className="window-content scale-up-center" style={{
      borderRadius: 17,
      width,
      height,
      backgroundColor
      }}>
      {children}
    </div>
  );
}

export default Window;
