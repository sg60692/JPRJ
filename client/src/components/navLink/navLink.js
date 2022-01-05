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
                duration={300}
                onClick={props.onClick}
                offset={-30}
            ><li>{props.text}</li>
            </Link>
        
    )
}
export default navLink
