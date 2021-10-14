import React from "react";
import { useRef, useEffect, useState } from "react";
import Project_1 from "../../images/Project_1.webp";
import "./Products.scoped.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function AnimationRightLeft() {
  const boxRef1 = useRef();
  const boxRef2 = useRef();
  const boxRef3 = useRef();
  const boxRef4 = useRef();
  gsap.registerPlugin(ScrollTrigger);
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  useEffect(() => {
    gsap.to(boxRef1.current, {
      scrollTrigger: {
        trigger: boxRef1.current,
        scrub: true,

        start: "top 100%",
        end: "+=400",
        toggleActions: "play none none reverse",
        // start: "bottom",
        //  markers:true
      },

      //  x: 200,
      duration: 300,
      x: windowDimensions.width / 50,
    });
  });
  useEffect(() => {
    gsap.to(boxRef2.current, {
      scrollTrigger: {
        trigger: boxRef2.current,
        scrub: true,

        start: "top 100%",
        end: "+=400",
        toggleActions: "play none none reverse",
        // start: "bottom",
        // markers:true
      },

      //  x: 200,
      duration: 300,
      x: -windowDimensions.width / 50,
    });
  });
}
export default AnimationRightLeft
