import React from "react";
import { motion } from "framer-motion";

interface CustomButtonInterface {
 children: React.ReactNode;
 className: string;
 onClick?: () => void;
 href?: string;
}

function CustomButton({ children, className, onClick, href }: CustomButtonInterface): React.ReactElement {
  if(href) {
    return (
      <motion.a
        className={className}
        href={href}
        whileHover={{ borderRadius: ["5px", "10px", "25px", "30px"], transition: { duration: 0.2 } }}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      className={className}
      onClick={onClick}
      whileHover={{ borderRadius: ["5px", "10px", "25px", "30px"], transition: { duration: 0.2 } }}
    >
      {children}
    </motion.button>
  );

};

export default CustomButton;
