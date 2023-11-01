import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

interface FromLeftToRightInterface {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}

function FromLeftToRight({ children, onClick, className = "" } : FromLeftToRightInterface) {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [rendered, setRendered] = useState<boolean>(false);

  useEffect(() => {
    if (inView && !rendered) {
      controls.start("visible");
      setRendered(true);
    }
  }, [controls, inView, setRendered]);

  return (
    <motion.li
      ref={ref}
      className={className}
      animate={controls}
      onClick={onClick}
      initial="hidden"
      transition={{ duration: 1.0 }}
      variants={{
        visible: { x: [-100, 0], opacity: [0, 1] },
        hidden: { x: 0, opacity: 0 }
      }}
    >
      {children}
    </motion.li>
  );
}

export default FromLeftToRight;