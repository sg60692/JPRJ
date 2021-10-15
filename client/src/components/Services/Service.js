import React from "react";
import "./Service.scoped.css";
import AnimationRightLeft from "../Animations/AnimateRightLeft";
import AnimationZoom from "../Animations/AnimationZoom";
import AnimationAppear from "../Animations/AnimationAppear"

function Service() {
  return (
    <div id="services">
      <section class="fold fold-3">
        <AnimationAppear>
        <div class="text-center container">
          <h2>
            Speed up your Growth
          </h2>
          <div class="content-wrap info-wrapper comp-1 comp-7">
            <h4 class="subtitle">
              A dedicated work ethic and collaborative development drives us
            </h4>
          </div>
        </div>
            </AnimationAppear>    
        <div class="wrapper">
            <div class="text-center f ">                
                <div class="d-flex flex-wrap container">
                    <AnimationRightLeft direction="left"className="comp-8 animate-left service-large">
                        <div>
                            <div class="icon-Manufacturing icon"/>
                        </div> 
                        <p class="sub-caption">
                            Leverage competitive demand using faster and 
                            more efficient manufacturing.                                       
                        </p>
                    </AnimationRightLeft>
                    <AnimationZoom className="comp-8 animate-left service-small">
                        <div>
                            <div class="icon-Manufacturing icon"/>
                        </div> 
                        <p class="sub-caption">
                            Leverage competitive demand using faster and 
                            more efficient manufacturing.                                       
                        </p>
                    </AnimationZoom>
                    <AnimationZoom className="comp-8 animate-left">
                        <div>
                            <div class="icon-Manufacturing icon"/>
                        </div> 
                        <p class="sub-caption">
                            Leverage competitive demand using faster and 
                            more efficient manufacturing.                                       
                        </p>
                    </AnimationZoom>
                    <AnimationZoom className="comp-8 animate-left service-small">
                        <div>
                            <div class="icon-Manufacturing icon"/>
                        </div> 
                        <p class="sub-caption">
                            Leverage competitive demand using faster and 
                            more efficient manufacturing.                                       
                        </p>
                    </AnimationZoom>
                    <AnimationRightLeft direction="right"className="comp-8 animate-left service-large">
                        <div>
                            <div class="icon-Manufacturing icon"/>
                        </div> 
                        <p class="sub-caption">
                            Leverage competitive demand using faster and 
                            more efficient manufacturing.                                       
                        </p>
                    </AnimationRightLeft>                   
                </div>
            </div>
            <div class="text-center fc">
                <div class="d-flex flex-wrap container">
                    <AnimationZoom direction="left"className="comp-8 animate-left ml-auto">
                        <div>
                            <div class="icon-Manufacturing icon"/>
                        </div> 
                        <p class="sub-caption">
                            Leverage competitive demand using faster and 
                            more efficient manufacturing.                                       
                        </p>
                    </AnimationZoom>                       
                    <AnimationZoom direction="left"className="comp-8 animate-left mr-auto">
                        <div>
                            <div class="icon-Manufacturing icon"/>
                        </div> 
                        <p class="sub-caption">
                            Leverage competitive demand using faster and 
                            more efficient manufacturing.                                       
                        </p>
                    </AnimationZoom> 
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}
export default Service;
