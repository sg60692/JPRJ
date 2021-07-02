import React from 'react'
import tool from '../../images/test.png'
import './Home.scoped.css';
function Home() {
    return (
        <div class="home-banner banner p-relative" id="Home">
            <div class="container d-flex align-center p-relative">
                <div>
                    <h1 class="text-dark">Are you ready to<strong class="text-light"> upgrade </strong><br class="d-sm-none" />your manufacturing?</h1>
                    <p class="caption text-light">
                        We have been in the Manufacturing and Distribution Sector since 2009.
                        Our aim is to provide our customers with a hassel free experience.
                    </p> 
                </div>
                <div class="home-img-1">
                    <img alt="banner img" src={tool}/>
                </div>
            </div>
        </div>
    )
}

export default Home
