import React, { useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface FromUpToDownInterface {
  children: React.ReactNode;
}


function FromUpToDown({ children } : FromUpToDownInterface) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
      controls.start("move");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="visible"
      transition={{ duration: 1.0, type: "spring", bounce: 0.25 }}
      variants={{
        visible: { y: -100, scale: 1.5 },
        move: {y: 0, scale: 1.0 }
      }}
    >
      {children}
    </motion.div>
  );
}

export default FromUpToDown;