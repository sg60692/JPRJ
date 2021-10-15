import React,{useRef,useEffect} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function AnimationAppear(props) {
  let elem = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  console.log(props)
  useEffect(() => {
    console.log(elem,"ok")
    gsap.from(elem, {
      opacity: -1  
    });
    gsap.to(elem,{
      scrollTrigger:{
        trigger:elem,
        toggleActions:"play pause reverse pause",
        scrub:true
      },
      opacity:1
    })
  },[]);
  return(
    <div ref={el => {elem=el;}} {...props}>
      {props.children}
      
    </div>
  );
}
export default AnimationAppear;
