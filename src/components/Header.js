import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCocktail } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [click, setClick] = useState(false);

  return (
    <nav className="navbar">
      <h2 className="navbar-title" onClick={() => setClick(false)}>
        <a href="/" className="link">
          HowToCocktail <FaCocktail className="navbar-icon" />
        </a>
      </h2>
      <ul className={click ? "navbar-list responsive" : "navbar-list"}>
        <li className="navbar-li" onClick={() => setClick(false)}>
          <a href="/" className="link">
            Home
          </a>
        </li>

        <li className="navbar-li" onClick={() => setClick(false)}>
          <Link to="/about" className="link">
            About
          </Link>
        </li>
      </ul>
      <div className="burger-icon" onClick={() => setClick(!click)}>
        {click ? <AiOutlineClose /> : <GiHamburgerMenu />}
      </div>
    </nav>
  );
};

export default Header;
