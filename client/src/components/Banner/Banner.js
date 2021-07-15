import React from 'react'
import bannerOverlay from '../../images/BackgroundOverlay.webp';
import leafLeft from '../../images/leaf_left.webp';
import leafRight from '../../images/leaf_right.webp';
import PhoneIcon from '@material-ui/icons/Phone';
import './Banner.scoped.css';

function Banner() {
    return (
        <div id="Banner">
            <div className="banner-wrap">
                <div className="banner-overlay">
                    <img src={bannerOverlay} />
                </div>
            </div>
            <div className="overlay-text">
                <div className="layer">
                    <h1>Get Your<br/>Future Home<br/>Today</h1> 
                    <div className="sub">
                        <div>
                        <img src={leafLeft} className="left-leaf"/>
                        <h4>Give Strength to Your Dreams</h4>
                        <img src={leafRight} className="right-leaf"/>
                        </div>                    
                    </div>
                    <a className="contact-number" href="tel:6239803560">
                        <PhoneIcon className="phone-icon"/>
                        <div>623980560</div>
                    </a>  
                </div>
                
            </div>            
        </div>
    )
}

export default Banner
