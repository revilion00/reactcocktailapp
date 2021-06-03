import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import useSearchDetails from "../hooks/useSearchDetails";
import LoadingAnimation from "../components/LoadingAnimation";

const ResultDetails = () => {
  const { id } = useParams();

  const { loading, resultDetails, error } = useSearchDetails(id);

  if (loading) {
    return <LoadingAnimation />;
  }
  if (resultDetails < 1) {
    return (
      <div className="info-box">
        <h2 className="info-box">No data to display</h2>
        <Link to="/" className="button">
          Go back
        </Link>
      </div>
    );
  } else {
    let { alcoholic, category, name, image, glass, instruction, ingredients } =
      resultDetails[0];

    const arrayToString = () => {
      ingredients = ingredients.filter(Boolean);
      const ingredientsArray = ingredients.join(", ");
      return <span>{ingredientsArray}</span>;
    };

    return (
      <div className="result-details">
        <img src={image} alt={name} className="image" />
        <div className="details-info">
          <h3>{name}</h3>
          <div className="details-box">
            <span className="span">name:</span>
            <p className="paragraph">{name}</p>
          </div>

          <div className="details-box">
            <span className="span">category:</span>
            <p className="paragraph">{category}</p>
          </div>

          <div className="details-box">
            <span className="span">alcoholic:</span>
            <p className="paragraph">{alcoholic}</p>
          </div>

          <div className="details-box">
            <span className="span">glass:</span>
            <p className="paragraph">{glass}</p>
          </div>

          <div className="details-box">
            <span className="span">ingredients:</span>
            <p className="paragraph">{arrayToString()}</p>
          </div>

          <div className="details-box">
            <span className="span">instructions:</span>
            <p
              className={
                instruction.length > 350 ? "paragraph responsive" : "paragraph"
              }
            >
              {instruction}
            </p>
          </div>

          <div className="button-box">
            <Link className="button" to="/">
              Go back
            </Link>
          </div>
        </div>
      </div>
    );
  }
};

export default ResultDetails;
