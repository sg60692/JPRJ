import React,{useRef,useEffect} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
function AnimationRightLeft(props) {
  let elem = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    let dist = props.dist ? props.dist : 100;
    gsap.set(elem, {
      x: (props.direction === "left") ? -dist : dist   
    });
    gsap.to(elem,{
      scrollTrigger:{
        trigger:elem,
        toggleActions:"play pause reverse pause",
        scrub:0.1,
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
