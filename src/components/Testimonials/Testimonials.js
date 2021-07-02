import React from 'react';
import './Testimonials.scoped.css';

const Testimonials=() => {
    return (
        <div id="Testimonials">
            <section class="fold">
                <div class="text-center container">
                    <h2>Our Esteemed Customers</h2>
                </div>
                <div class="text-center Testimonials-small" >
                    <div class="d-flex flex-wrap" >
                        <a class="comp-8 img-small animate-left">
                            <h3>Kesar Appliances</h3> 
                            <p class="sub-caption">
                                We supply Kesar Appliances Limited with stove burners in bulk 
                                and provided them with the assured best quality products and service.
                            </p>
                        </a>
                        <a class="comp-8 img-small animate-zoom">
                            <h3>RM Controls</h3> 
                            <p class="sub-caption">
                                Our methods have been beneficial for RM Controls as we 
                                focus on the development of our customers along with us            
                            </p>
                        </a>
                        <a class="comp-8 marketplace animate-right">  
                            <h3>Summit Automation</h3>                          
                            <p class="sub-caption">
                                We have been able to provide Summit Automation with complete 
                                customer satisfaction for over the past decade.
                            </p>
                        </a>                        
                    </div>
                </div>
            </section>            
            <div class="testimony-container">
                <div class="bubble-wrapper animate-zoom">
                    <div class="bubble">
                            <div class="top-quotes"></div>
                            <p class="bubble-content">
                                We supply Kesar Appliances Limited with stove burners in bulk 
                                and provided them with the assured best quality products and service.
                            </p>
                            <div class="bottom-quotes"></div>
                            <h6 class="testimony-attestent">Kesar Appliances</h6>
                    </div>
                </div>
                <div class="bubble-wrapper animate-zoom">
                    <div class="bubble">
                        <div class="top-quotes"></div>
                        <p class="bubble-content">
                            Our methods have been beneficial for RM Controls as we 
                            focus on the development of our customers along with us
                        </p>
                        <div class="bottom-quotes"></div>
                        <h6 class="testimony-attestent">RM Controls<br/> Pvt. Ltd.</h6>
                    </div>
                </div>
                <div class="bubble-wrapper animate-zoom">
                    <div class="bubble">
                        <div class="top-quotes"></div>
                        <p class="bubble-content">
                            We have been able to provide Summit Automation with complete 
                            customer satisfaction for over the past decade.
                        </p>
                        <div class="bottom-quotes"></div>
                        <h6 class="testimony-attestent">Summit Automation<br/>Control Systems</h6>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Testimonials;