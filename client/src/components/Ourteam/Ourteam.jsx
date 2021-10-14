import React from 'react'
import './Ourteam.scoped.css'
import '../../bootstrap/bootstrap.scoped.css'

import { useRef ,useEffect ,useState} from 'react';
import Project_1 from "../../images/Project_1.webp";

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
function Ourteam() {
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
            x:-windowDimensions.width/30,
            
                     
            
        
           
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
           x: +windowDimensions.width/30,
                    
           
       
          
           }
       )
    })
    return (
        <section className="bg-light page-section" id="team">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="section-heading ">Our Amazing Team</h2>
                        <h3 className="section-subheading text-muted">We are dedicated to building a better tomorrow</h3>
                    </div>
                </div>
                <div className="row" >
                    <div className="col-sm-6">
                        <div className="animate-left" ref={boxRef1}>
                            <div className="Member shadow-lg">
                                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" />
                                <div>
                                    <h4>Kay Garland</h4>
                                    <p className="text-muted">Lead Designer</p>
                                </div>                                
                            </div>                            
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="animate-right" ref={boxRef2}>
                            <div className="Member shadow-lg">                                
                                <div>
                                    <h4>Kay Garland</h4>
                                    <p className="text-muted">Lead Designer</p>
                                </div>   
                                <img 
                                 className="ml-auto"
                                src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" />                             
                            </div>                            
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8 mx-auto text-center">
                        <p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Ourteam
