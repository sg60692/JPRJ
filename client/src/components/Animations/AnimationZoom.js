import { useState, useEffect,useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const Boop1 = ({ rotation = 20, timing = 200, children }) => {
  const [isBooped, setIsBooped] = useState(false);
  const style = {
    display: "flex",
    backfaceVisibility: "hidden",
    transform: isBooped
      ? `rotate(0deg)
            scale(1.3)
            translate(-10px, 0px)
           `
      : `rotate(0deg)`,
    transition: `transform ${timing}ms`,
  };
  useEffect(() => {
    if (!isBooped) {
      return;
    }
    const timeoutId = window.setTimeout(() => {
      setIsBooped(false);
    }, timing + 200);
    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isBooped, timing]);
  const trigger = () => {
    setIsBooped(true);
  };
  
  return (
    <span onMouseEnter={trigger} style={style}>
      {children}
    </span>
  );
};
