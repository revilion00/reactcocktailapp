import { useState, useEffect } from "react";
import axios from "axios";

const useSearchCocktails = (input) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});

  useEffect(() => {
    const API_KEY = process.env.REACT_APP_API_KEY_SEARCH;
    let cancel;

    const handleSearchCocktail = async () => {
      setLoading(true);
      await axios
        .get(API_KEY + input, {
          cancelToken: new axios.CancelToken((c) => (cancel = c)),
        })
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
        .catch((e) => {
          if (axios.isCancel(e)) return;
          setResults([]);
          setLoading(false);
          setError({ errorMessage: "Error occured during search, try again" });
        });
      setLoading(false);
    };
    handleSearchCocktail();
    return () => cancel();
  }, [input]);
  return { results, loading, error };
};

export default useSearchCocktails;
