import React from 'react';
import { motion } from "framer-motion";
//import "./Window.css";


interface WindowInterface {
  minHeight?: number;
  backgroundColor: string;
  children?: React.ReactNode;
}

const footerHeight = 30;

function Window({minHeight = 0, backgroundColor, children} : WindowInterface) {
  return (
    <motion.div className="shadow-[20px_25px_0px_0px_rgba(0,_0,_0,_0.4)]" style={{width: "100%", minHeight }} whileHover={{ scale: 1.05, transition: { duration: 0.25 }}}>
      <div style={{ background: "#d6d6d6", height: `${footerHeight}px`, width: "100%", borderRadius: "10px 10px 0 0"}}>
        <div style={{ gap: "5px", display: "flex", flexDirection: "row-reverse", alignItems: "center", width:'98%', height:'100%'}}>
          <span className="w-4 h-4 rounded-full" style={{background: "#ff6159"}} />
          <span className="w-4 h-4 rounded-full" style={{background: "#ffc130"}} />
          <span className="w-4 h-4 rounded-full" style={{background: "#2acd43"}} />
        </div>
      </div>
      <div style={{
        borderRadius: "0 0 10px 10px",
        width: "100%",
        height: "100%",
        minHeight: minHeight - footerHeight,
        backgroundColor
        }}>
        {children}
      </div>
    </motion.div>
  );
}

export default Window;