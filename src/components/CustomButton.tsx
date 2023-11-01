import React from "react";
import { motion } from "framer-motion";

interface CustomButtonInterface {
 children: React.ReactNode;
 onClick?: () => void;
 href?: string;
 size?: "small" | "normal"
}

function CustomButton({ children, onClick, href, size="normal" }: CustomButtonInterface): React.ReactElement {
  if(href) {
    return (
      <motion.a
        className={size === "small" ? "btn-sm btn btn-outline rounded-sm" : "btn btn-outline rounded-sm"}
        href={href}
        whileHover={{ borderRadius: ["5px", "10px", "25px", "30px"], transition: { duration: 0.2 } }}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      className={size === "small" ? "btn-sm btn btn-outline rounded-sm" : "btn btn-outline rounded-sm"}
      onClick={onClick}
      whileHover={{ borderRadius: ["5px", "10px", "25px", "30px"], transition: { duration: 0.2 } }}
    >
      {children}
    </motion.button>
  );

};

export default CustomButton;
