import { useState, useEffect } from "react";
import axios from "axios";

const useSearchCocktails = (input) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});

  const urlBySearch =
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

  useEffect(() => {
    const handleSearchCocktail = async () => {
      setLoading(true);
      await axios
        .get(urlBySearch + input)
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
          setError({ errorMessage: "Error occured during search" });
        });
      setLoading(false);
    };
    handleSearchCocktail();
  }, [input]);
  return { results, loading, error };
};

export default useSearchCocktails;
