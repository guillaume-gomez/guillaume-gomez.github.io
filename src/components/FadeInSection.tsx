import React, { useLayoutEffect } from "react";
import "./FadeInSection.css";

interface FadeInSectionInterface {
  children: React.ReactNode;
  onlyOnce?: boolean;
}

function FadeInSection({children, onlyOnce = true} : FadeInSectionInterface) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(onlyOnce) {
          if(isVisible === false && entry.isIntersecting) {
            setVisible(true)
          }
        } else {
          setVisible(entry.isIntersecting);
        }
      })
    });
    if(!domRef || !domRef.current) {
      return;
    }
    observer.observe(domRef.current);
    return () => {
      if(!domRef || !domRef.current) {
        return;
      }
      return observer.unobserve(domRef.current);
    }
  }, [isVisible, onlyOnce]);
  
  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {children}
    </div>
  );
}

export default FadeInSection;