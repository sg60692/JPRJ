import React from 'react';
import './About.scoped.css';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import img1 from '../../images/img1.jpg';
import img2 from '../../images/img2.jpeg';
function About() {
    return (
        <div id="About" class="homepage">
            <section class="fold fold-2">
                <div class="p-relative container">
                    <div class="form-wrap">
                        <div class="home-form">
                            <div className="slide-container">
                                <Slide arrows={false}>
                                    <div className="each-slide">
                                            <img className="img1" src={img1} alt=""/>
                                            <div className="para1">
                                                <p className="para">
                                                    Mr. Davinder Kapoor is a highly skilled individual 
                                                    who is the proprietor of Neelam Enterprises which is 
                                                    our major shareholder. 
                                                </p>
                                                <p className="para para-small">
                                                    He is Cisco Certified and 
                                                    possesses great analytical skills. He has an inquisitive 
                                                    personality and has an insatiable appetite for growth and 
                                                    progress. He is a Bachelor of Computer Applications and 
                                                    his experience spans 20 years in this industry.&nbsp;
                                                </p>
                                            </div>
                                    </div>   
                                    <div className="each-slide">  
                                            <img className="img2" src={img2} alt=""/>                                         
                                            <div className="para2">
                                                <p className="para">
                                                    Mrs. Neelam Kapoor is a passionate leader with great wisdom and 
                                                    is the proprietor of Tulsi Enterprises, one of our major shareholders. 
                                                </p>
                                                <p className="para para-small">
                                                    She has an energetic personality with good social and communication skills.                                                      
                                                    She has done her Post Graduation in Master of Arts. 
                                                    Her dedication towards her work and this industry is highly commendable.&nbsp;
                                                </p>
                                            </div>                                            
                                    </div>       
                                </Slide>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About;
