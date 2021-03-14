import React, { useContext, useState, useEffect } from "react";
import axios from "axios";

const urlBySearch = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const GlobalContext = React.createContext();

const GlobalProvider = ({ children }) => {

    const [input, setInput] = useState("");
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);

    //getting data based on input value
    useEffect(() => {
       const getResult = async () => { 
        setLoading(true);
          await axios.get(urlBySearch + input)
            .then(response => {
                const { drinks } = response.data;
                if (drinks) {
                    const newDrink = drinks.map(drink => {
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
                        }
                    });
                    setResults(newDrink);
                } else {
                    setResults([]);
                }
                // setLoading(false);
            })
            .catch(error => {
                console.log(error);
                // setLoading(false);
            });
            setLoading(false);
        }
        getResult();
    }, [input]);


    return (
        <GlobalContext.Provider 
            value={{
                results,
                input,
                setInput,
                loading
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
}

export const useGlobalContext = () => {
    return useContext(GlobalContext);
}

export { GlobalContext, GlobalProvider }