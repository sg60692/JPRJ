import React from 'react'
import { useRef ,useEffect ,useState} from 'react';
import Project_1 from "../../images/Project_1.webp";
import './Products.scoped.css';

function Products() {
    return (
        <div id="Product">
            <section class="fold fold-4 bg-dark">
                <div class="container" >                    
                    <h2 class="text-center" className="ok1">One Tag, </h2>
                    <h2 class="text-center" className="ok2"> Many Possibilities.</h2>
                    <div class="d-flex align-center justify-content-even comp-1 comp-7">
                        <div class="img animate-left" >
                            <img src={Project_1}  class="img-responsive" alt="Search Ads" />
                        </div>
                        <div class="content-wrap info-wrapper animate-right">
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
