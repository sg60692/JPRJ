import React,{useRef,useEffect} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function AnimationRightLeft(props) {
  let elem = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  console.log(props)
  useEffect(() => {
    console.log(elem,"ok")
    gsap.from(elem, {
      x: props.direction === "left" ? -100 : 100
    
    
    });
    gsap.to(elem,{
      scrollTrigger:{
        trigger:elem,
        toggleActions:"play pause reverse pause",
        scrub:0.2
      },
      x:0
    })
  },[]);
  return(
    <div ref={el => {elem=el;}} {...props}>
      {props.children}
      
    </div>
  );
}
export default AnimationRightLeft;
