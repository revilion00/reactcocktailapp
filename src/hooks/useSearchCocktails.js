import { useState, useEffect } from "react";
import axios from "axios";

const useSearchCocktails = (input) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});

  useEffect(() => {
    const API_KEY = process.env.REACT_APP_API_KEY_SEARCH;
    console.log(API_KEY);
    const handleSearchCocktail = async () => {
      setLoading(true);
      await axios
        .get(API_KEY + input)
        .then(async (response) => {
          const { drinks } = await response.data;
          if (drinks) {
            const newDrink = drinks.map((drink) => {
              const {
                idDrink,
                strAlcoholic,
                strCategory,
                strDrink,
                strDrinkThumb,
              } = drink;

              return {
                id: idDrink,
                alcoholic: strAlcoholic,
                category: strCategory,
                name: strDrink,
                image: strDrinkThumb,
              };
            });
            setResults(newDrink);
          } else {
            setResults([]);
          }
        })
        .catch((error) => {
          console.log(error);
          setResults([]);
          setLoading(false);
          setError({ errorMessage: "Error occured during search" });
        });
      setLoading(false);
    };
    handleSearchCocktail();
  }, [input]);
  return { results, loading, error };
};

export default useSearchCocktails;
