import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FaCocktail } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";


const Header = () => {

    const [click, setClick] = useState(false);

    const clickHandler = () => setClick(!click);

    const mobileMenuHandler = () => setClick(false);

    return (
        <nav className="navbar">
            <h2 className="navbar-title" onClick={mobileMenuHandler}><a href="/" className="link">HowToCocktail <FaCocktail className="navbar-icon"/></a></h2>
            <ul className={click ? "navbar-list responsive" : "navbar-list"}>

                <li className="navbar-li"  onClick={mobileMenuHandler}>
                    <a href="/" className="link">Home</a>
                </li>

                <li className="navbar-li" onClick={mobileMenuHandler}>
                    <Link to="/about" className="link">About</Link> 
                </li>

            </ul>
            <div className="burger-icon" onClick={clickHandler}>
            {
             click ? <AiOutlineClose/> : <GiHamburgerMenu/> 
            }
            </div>
        </nav>
    );
}

export default Header;
