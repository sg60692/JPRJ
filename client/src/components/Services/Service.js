import { useState, useEffect, useRef } from "react";
import "./Service.scoped.css";
import { easings } from "react-animation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import zIndex from "@material-ui/core/styles/zIndex";
function Service() {
  const stylex = {
    animation: `pop-in ${easings.easeOutExpo} 800ms forwards`,
  };
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
      },
    });

    tl.to(boxRef3.current, { opacity: 1, duration: 1 })
      .to(boxRef3.current, { opacity: 1, duration: 0.5 }, 0.5)
      .to(boxRef4.current, { opacity: 1, duration: 0.5 })
      .to(boxRef4.current, { opacity: 1, duration: 0.5 }, 0.5);
  });
  return (
    <div id="services" style={stylex}>
      <section class="fold fold-3">
        <div class="text-center container">
          <h2 ref={boxRef3} id="okay1">
            Speed up your Growth
          </h2>
          <div class="content-wrap info-wrapper comp-1 comp-7">
            <h4 class="subtitle" ref={boxRef4} id="okay2">
              A dedicated work ethic and collaborative development drives us
            </h4>
          </div>
        </div>

        <div class="wrapper">
          <RenderMe />

          {/* <RenderMe></RenderMe> */}
        </div>
      </section>
    </div>
  );
}
const Boop1 = ({ rotation = 20, timing = 200, children }) => {
  const [isBooped, setIsBooped] = useState(false);
  const style = {
    display: "flex",
    backfaceVisibility: "hidden",
    transform: isBooped
      ? `rotate(0deg)
            scale(0.2)
            translate(-10px, 0px)
           `
      : `rotate(0deg)`,
    transition: `transform ${timing}ms`,
  };
  useEffect(() => {
    if (!isBooped) {
      return;
    }
    const timeoutId = window.setTimeout(() => {
      setIsBooped(false);
    }, timing + 200);
    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isBooped, timing]);
  const trigger = () => {
    setIsBooped(true);
  };
  return (
    <span onMouseEnter={trigger} style={style}>
      {children}
    </span>
  );
};
function RenderMe() {
  const boxRef1 = useRef();
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.to(boxRef1.current, {
      scrollTrigger: {
        trigger: boxRef1.current,
        scrub: true,

        start: "top 960px",
        end: "+=400",
        toggleActions: "play none none reverse",
        // start: "bottom",
        //  markers:true
      },

      //  x: 200,
      duration: 300,
      scale: 1.3,
      ease: "in",
    });
  });
  return (
    <div class="d-flex flex-wrap container" className="ok1" ref={boxRef1}>
      <Boop1>
        <a class="comp-8 animate-left service-small">
          <div>
            <div class="icon-Manufacturing icon" />
          </div>
          <p class="sub-caption">
            Leverage competitive demand using faster and more efficient
            manufacturing.
          </p>
        </a>
      </Boop1>
      <Boop1>
        <a class="comp-8 animate-zoom service-large">
          <div>
            <div class="icon-Manufacturing icon" />
          </div>
          <p class="sub-caption">
            Leverage competitive demand using faster and more efficient
            manufacturing.
          </p>
        </a>
      </Boop1>
      <Boop1>
        <a class="comp-8 marketplace animate-right service-large">
          <div>
            <div class="icon-Distribution icon" />
          </div>
          <p class="sub-caption">
            Harness the power of quick and easy distribtuion of Ferrous and Non
            Ferrous metals
          </p>
        </a>
      </Boop1>
      <Boop1>
        <a class="comp-8 marketplace animate-right service-large">
          <div>
            <div class="icon-Electricpanel icon" />
          </div>
          <p class="sub-caption">
            Reliable and top quality electric panels delievered to your door
            step
          </p>
        </a>
      </Boop1>
      <Boop1>
        <a class="comp-8 marketplace animate-zoom service-small">
          <div>
            <div class="icon-Electricpanel icon" />
          </div>
          <p class="sub-caption">
            Reliable and top quality electric panels delievered to your door
            step
          </p>
        </a>
      </Boop1>
    </div>
  );
}
export default Service;
