import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

interface FadeInWhenVisibleAndMoveInterface {
  children: React.ReactNode;
  direction: "left"| "right";
  className?: string;
}

function FadeInWhenVisibleAndMove({ children, direction, className } : FadeInWhenVisibleAndMoveInterface) {
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
      className={className}
      initial="hidden"
      transition={{ duration: 2.0, type: "spring", bounce: 0.20 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0, x: direction === "left" ?  "-25vw" : "25vw" },
        move: {x: 0}
      }}
    >
      {children}
    </motion.div>
  );
}

export default FadeInWhenVisibleAndMove;