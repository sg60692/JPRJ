import React from "react";
import "./Service.scoped.css";
import AnimationRightLeft from "../Animations/AnimateRightLeft";

function Service() {
  return (
    <div id="services">
      <section class="fold fold-3">
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
        <div class="wrapper">
            <AnimationRightLeft direction="left">
                <div>
                    
                </div>
            </AnimationRightLeft>
        </div>
      </section>
    </div>
  );
}
export default Service;
