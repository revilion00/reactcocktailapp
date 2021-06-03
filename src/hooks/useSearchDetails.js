import { useState, useEffect } from "react";
import axios from "axios";

const useSearchDetails = (id) => {
  const [loading, setLoading] = useState(false);
  const [resultDetails, setResultDetails] = useState([]);
  const [error, setError] = useState({});

  useEffect(() => {
    const API_KEY = process.env.REACT_APP_API_KEY_ID;

    const getResultDetails = async () => {
      setLoading(true);
      await axios
        .get(API_KEY + id)
        .then(async (response) => {
          const { drinks } = await response.data;
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
        .catch(() => {
          setLoading(false);
          setError({ errorMessage: "Error occured during load, try again" });
        });
    };
    getResultDetails();
  }, [id]);
  return { loading, resultDetails, error };
};

export default useSearchDetails;
