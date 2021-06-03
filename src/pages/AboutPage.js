import React from 'react';
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className="info-box">
            <h3 className="about-title">About</h3>
            <p className="about-p">This app was made using <a rel="noreferrer" target="_blank" href="https://www.thecocktaildb.com/">TheCocktailDB</a> API.</p>
            <Link to="/" className="button">Go back</Link>
        </div>
    );
}

export default About;
