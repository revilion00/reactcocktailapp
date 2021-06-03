import React from "react";
import { Link } from "react-router-dom";

const Result = ({ id, category, name, image, alcoholic }) => {
  const nameLength = () => {
    return name.length > 20 ? (
      <span>{name.substr(0, 17) + "..."}</span>
    ) : (
      <span>{name}</span>
    );
  };

  return (
    <div className="result">
      <Link to={`/drink/${id}`} className="link link-result">
        <img src={image} alt={name} className="result-img" />
      </Link>

      <div className="result-info">
        <h3>{nameLength()}</h3>
        <span>{category}</span>
        <p>{alcoholic}</p>
      </div>
    </div>
  );
};

export default Result;
