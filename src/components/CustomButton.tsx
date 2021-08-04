import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface CustomButtonInterface {
 children: React.ReactNode;
 className: string;
 onClick?: () => void;
 href?: string;
}

function CustomButton({ children, className, onClick, href }: CustomButtonInterface): React.ReactElement {
  return (
    <motion.a
      href={href}
      className={className}
      onClick={onClick}
      whileHover={{ borderRadius: ["5px", "10px", "25px", "30px"], transition: { duration: 0.2 } }}
    >
      {children}
    </motion.a>
  );

};

export default CustomButton;
