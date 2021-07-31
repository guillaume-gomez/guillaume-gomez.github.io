import React, { useEffect, useRef } from "react";

import "./SmoothScroll.css";
import useWindowSize from "../../../hooks/useWindowSize";

interface SmoothScrollInterface {
  children: React.ReactNode;
}

function SmoothScroll({ children } : SmoothScrollInterface ) : React.ReactElement {
  const windowSize = useWindowSize();
  const scrollingContainerRef = useRef(null);
  const data = {
    ease: 0.05,
    current: 0,
    previous: 0,
    rounded: 0,
  };

  useEffect(() => {
    setBodyHeight();
  }, [windowSize.height]);

  const setBodyHeight = () => {
    document.body.style.height = `${
      (scrollingContainerRef.current as any).getBoundingClientRect().height
    }px`;
  };

  // 5.
  useEffect(() => {
    requestAnimationFrame(() => smoothScrollingHandler());
  }, []);

  const smoothScrollingHandler = () => {
    data.current = window.scrollY;
    data.previous += (data.current - data.previous) * data.ease;
    data.rounded = (Math.round(data.previous * 100) / 100);
    (scrollingContainerRef.current as any).style.transform = `translateY(-${data.previous}px)`;
    console.log(data.previous)
    // Recursive call
    requestAnimationFrame(() => smoothScrollingHandler());
  };

  return (
    <div className="smooth-scroll-parent">
      <div ref={scrollingContainerRef}>{children}</div>
    </div>
  );
};

export default SmoothScroll;
