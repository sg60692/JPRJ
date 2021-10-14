import React,{useRef,useEffect} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function AnimationZoom(props) {
  let elem = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(()=>{
    gsap.from(elem,{
      scale:0.7
    });
    gsap.to(elem,{
      scrollTrigger:{
        trigger:elem,
        scrub:0.2
      },
      scale:1
    })
  },[]);
  return(
    <div ref={el => {elem=el;}} {...props}>
      {props.children}
    </div>
  );
}
export default AnimationZoom;
