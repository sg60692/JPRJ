import React from 'react'
import collage from "../../images/collage.png";
import machinary from "../../images/machinary.jpg";
import './Products.scoped.css';
function Products() {
    return (
        <div id="Product">
            <section class="fold fold-4 bg-dark">
                <div class="container">
                    <h2 class="text-center">One Tag, Many Possibilities.</h2>
                    <div class="d-flex align-center justify-content-even comp-1 comp-7">
                        <div class="img-wrap img-wrap-small animate-left">
                            <img src={collage} class="img-responsive" alt="Search Ads"/>
                        </div>
                        <div class="content-wrap info-wrapper animate-right">
                            <h3 class="title">Services</h3>
                            <h4 class="subtitle">Revolutionize your Manufacturing process</h4>
                            <p class="caption"> 
                                We aim to provide our customers an easygoing experience and 
                                we hope to satisfy their expectations.Our goal is to fulfill 
                                our purchase orders way before they hit their deadlines. 
                                We provide excellent quality product, and each and every product of 
                                ours is ensured to have the best raw material and depiction 
                                of craftsmanship skills.
                            </p>
                        </div>
                    </div>

                    <div class="d-flex align-center justify-content-even comp-1 comp-7">
                        <div class="content-wrap info-wrapper animate-left">
                            <h3 class="title">Technology</h3>
                            <h4 class="subtitle">Stay ahead of the curve</h4>
                            <p class="caption">
                                We use bleeding edge technology and believe in using it to 
                                our advantage. Inventory, assembly and machining becomes 
                                increasingly efficient as we use wearable tech. Predictive 
                                maintenance is helping us avoid downtime, giving us the 
                                opportunity to provide our customers with time efficient 
                                and cost affective services. 
                            </p>
                        </div>
                        <div class="img-wrap img-wrap-small animate-right">
                            <img src={machinary} class="img-responsive" alt="Display Ad"/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Products
