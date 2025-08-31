import { useEffect } from "react";
import { animatePageIn } from "../animations";
import { useLocation } from 'react-router';

export default function Template({ children }: { children: React.ReactNode }) {
  const location = useLocation()

  useEffect(() => {
    animatePageIn();
  }, [location]);

  return (
    <div>
      <div
        id="transition-element"
        className="w-screen h-screen bg-black z-100 fixed top-0 left-0"
      ></div>
      {children}
    </div>
  );
}