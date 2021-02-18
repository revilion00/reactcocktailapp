import React from 'react';
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="info-box">
            <h3>Oops! This page does not exist</h3>
            <Link to="/" className="button">Go home</Link>
        </div>
    );
}

export default Error;
