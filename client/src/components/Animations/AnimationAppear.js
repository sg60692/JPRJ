import { easings } from 'react-animation'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useState,useEffect,useRef} from 'react';
function AnimationAppear(){
    const stylex = {
        animation: `pop-in ${easings.easeOutExpo} 800ms forwards`,
    
    }
    // gsap.registerPlugin(ScrollTrigger)
    const boxRef3 = useRef();
    const boxRef4 = useRef();
    useEffect(() => {
        const tl = gsap.timeline({

            scrollTrigger: {
                trigger: boxRef3.current,
                start: "+=25 80%",
                end: "+=200 30%",
                //   scrub: true,
                markers: true,
                toggleActions: "play reverse play reverse",
            }
        
        });
      
        tl
            .to(boxRef3.current, { opacity: 1, duration: 1 })
            .to(boxRef3.current, { opacity: 1, duration: 0.5 },
                0.5)
            .to(boxRef4.current, { opacity: 1, duration: 0.5 })
            .to(boxRef4.current, { opacity: 1, duration: 0.5 },
                0.5)
        
    })
}
export default AnimationAppear;