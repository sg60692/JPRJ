import React from 'react'
import './Ourteam.scoped.css'
function Ourteam() {
    return (
        <section className="bg-light page-section" id="team">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
                        <h3 className="section-subheading text-muted">We are dedicated to building a better tomorrow</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="">
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
                        <div className="">
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
