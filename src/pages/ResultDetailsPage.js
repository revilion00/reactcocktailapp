import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import LoadingAnimation from "../components/LoadingAnimation";

const ResultDetails = () => {
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  const [resultDetails, setResultDetails] = useState([]);

  useEffect(() => {
    const API_KEY = process.env.REACT_APP_API_KEY_ID;
    const getResultDetails = async () => {
      setLoading(true);
      await axios
        .get(API_KEY + id)
        .then((response) => {
          const { drinks } = response.data;
          if (drinks) {
            const newResultDetails = drinks.map((drink) => {
              const {
                idDrink,
                strAlcoholic,
                strCategory,
                strDrink,
                strDrinkThumb,
                strGlass,
                strInstructions,
                strIngredient1,
                strIngredient2,
                strIngredient3,
                strIngredient4,
              } = drink;

              return {
                id: idDrink,
                alcoholic: strAlcoholic,
                category: strCategory,
                name: strDrink,
                image: strDrinkThumb,
                glass: strGlass,
                instruction: strInstructions,
                ingredients: [
                  strIngredient1,
                  strIngredient2,
                  strIngredient3,
                  strIngredient4,
                ],
              };
            });
            setResultDetails(newResultDetails);
          } else {
            setResultDetails([]);
          }
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    };
    getResultDetails();
  }, [id]);

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
