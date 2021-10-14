import React from 'react'
import { useRef ,useEffect ,useState} from 'react';
import Project_1 from "../../images/Project_1.webp";
import './Products.scoped.css';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function Products() {
    const boxRef1 = useRef();
    const boxRef2= useRef();
    const boxRef3=useRef();
    const boxRef4=useRef();
    gsap.registerPlugin(ScrollTrigger)
    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
          width,
          height
        };
      }
      const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    useEffect(() => {
         
        gsap.to(boxRef1.current, {
             scrollTrigger:{
                 trigger: boxRef1.current,
                 scrub: true,
                
                start: "top 100%",
                end: "+=400",
                toggleActions: 'play none none reverse',
                // start: "bottom",
            //  markers:true
             },
             
            //  x: 200,
            duration: 300,
            x:windowDimensions.width/50,
            
                     
            
        
           
            }
        )
       
        }
       
       
    )
    useEffect(()=>{
        gsap.to(boxRef2.current, {
            scrollTrigger:{
                trigger: boxRef2.current,
                scrub: true,
               
               start: "top 100%",
               end: "+=400",
               toggleActions: 'play none none reverse',
               // start: "bottom",
            // markers:true
            },
            
           //  x: 200,
           duration: 300,
           x: -windowDimensions.width/50,
                    
           
       
          
           }
       )
    })
    useEffect(()=>{
        const tl = gsap.timeline( { 
   
            scrollTrigger: {
              trigger: boxRef3.current,
              start: "+=133 80%",
              end: "+=200 30%",
              scrub: true,
            //   markers: true,
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
    return (
        <div id="Product">
            <section class="fold fold-4 bg-dark">
                <div class="container" >
                    
                    <h2 class="text-center" ref={boxRef3} className="ok1">One Tag, </h2>
                    <h2 class="text-center" ref={boxRef4} className="ok2"> Many Possibilities.</h2>
                    {/* <h2 >Fade in and then out.</h2> */}
                     {/* <h3 ref={boxRef4}>Another text</h3> */}
                    <div class="d-flex align-center justify-content-even comp-1 comp-7">
                        <div class="img animate-left" ref={boxRef1}>
                            <img src={Project_1}  class="img-responsive" alt="Search Ads" />
                        </div>
                        <div class="content-wrap info-wrapper animate-right" ref={boxRef2}>
                            <h3 class="title">Services</h3>
                            <h4 class="subtitle">Revolutionize your Manufacturing process</h4>
                            <p class="caption"> 
                                We aim to provide our customers an easygoing experience. 
                                We provide excellent quality product, and each and every product of 
                                ours is ensured to have the best raw material and depiction 
                                of craftsmanship skills.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Products
