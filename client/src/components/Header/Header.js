import React, { useState} from 'react'
import './Header.scoped.css';
import logo from '../../images/logo.webp';
import TocIcon from '@material-ui/icons/Toc';
import CancelIcon from '@material-ui/icons/Cancel';
import NavLink from '../navLink/navLink';
function Header() {  
    const [checked, setChecked] = useState(true);
    function handleClick(){
        setChecked(!checked);
        console.log("hi");
    }
    return (
        <div id="Head">            
            <div id="Header">
                <div className="nav-heading">
                    <a href="/"className="nav-heading"><img src={logo} alt="logo"/></a>
                    <TocIcon onClick={handleClick} id="custom-nav-btn" className={`${checked?'visible':''}`}/> 
                    <CancelIcon onClick={handleClick} id="custom-nav-cancel" className={`${checked?'':'visible'}`}/>
                </div>              
                <ul onClick={handleClick} className={`${checked?'custom-menu':"custom-menu custom-menu-visible"}`}>
                    <NavLink onClick={handleClick} key={"Home"} text={"Home"} link="Banner"/>
                    <NavLink onClick={handleClick} key={"Service"} text={"Service"} link="services"/>
                    <NavLink onClick={handleClick} key={"Projects"} text={"Projects"} link="Product"/>
                    <NavLink onClick={handleClick} key={"About"} text={"About"} link="team"/>
                    <NavLink onClick={handleClick} key={"Features"} text={"Features"} link="Features"/>
                    <NavLink onClick={handleClick} key={"Contact"} text={"Contact"} link="Contact"/>
                </ul>
            </div>
        </div>
    )
}

export default Header;
