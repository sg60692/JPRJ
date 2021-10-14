import { useState, useEffect,useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from 'react'

function AnimationZoom(children) {
  const [isZoomed, setIsZoomed] = useState(false);
  const style = {
    display: "flex",
    backfaceVisibility: "hidden",
    transform: isZoomed
      ? `rotate(0deg)
            scale(1.3)
            translate(-10px, 0px)
           `
      : `rotate(0deg)`,
    transition: `transform 500ms`,
  };
  useEffect(() => {
    if (!isZoomed) {
      return;
    }
    const timeoutId = window.setTimeout(() => {
      setIsZoomed(false);
    },500);
    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isBooped]);
  const trigger = () => {
    setIsBooped(true);
  };
  
  return (
    <span onMouseEnter={trigger}>
      {children}
    </span>
  );
}

export default AnimationZoom
