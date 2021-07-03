import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
import './navLink.scoped.css';
function navLink(props){
    return(
        
            <Link
                activeClass="active"
                to={props.link}
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                onClick={props.onClick}
            ><li>{props.text}</li>
            </Link>
        
    )
}
export default navLink
