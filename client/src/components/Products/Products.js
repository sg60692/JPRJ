import React from 'react'
import Project_1 from "../../images/Project_1.webp";
import './Products.scoped.css';
import AnimationRightLeft from "../Animations/AnimateRightLeft";

function Products() {
    return (
        <div id="Product">
            <section class="fold fold-4 bg-dark">
                <div class="container">
                    <h2 class="text-center">One Tag, Many Possibilities.</h2>
                    <div class="d-flex align-center justify-content-even comp-1 comp-7">
                        <AnimationRightLeft direction="left" className="img">
                            <img src={Project_1} class="img-responsive" alt="Search Ads"/>
                        </AnimationRightLeft >
                        <AnimationRightLeft direction="right" className="content-wrap info-wrapper">
                            <h3 class="title">Services</h3>
                            <h4 class="subtitle">Revolutionize your Manufacturing process</h4>
                            <p class="caption"> 
                                We aim to provide our customers an easygoing experience. 
                                We provide excellent quality product, and each and every product of 
                                ours is ensured to have the best raw material and depiction 
                                of craftsmanship skills.
                            </p>
                        </AnimationRightLeft >
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Products
