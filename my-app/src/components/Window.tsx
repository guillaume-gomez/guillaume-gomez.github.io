import React from 'react';


interface WindowInterface {
  x?: number | string;
  y?: number | string;
  width?: number | string;
  height?: number | string;
  backgroundColor: string;
  children?: React.ReactNode;
}

function Window({x = 0, y = 0, width = 0, height = 0, backgroundColor, children} : WindowInterface) {
  return (
    <div style={{position: "absolute", borderRadius: 17, left: x, top: y, width, height, backgroundColor }}>
      {children}
    </div>
  );
}

export default Window;
