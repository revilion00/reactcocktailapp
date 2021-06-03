import React, { useContext, useState } from "react";
import useSearchCocktails from "../hooks/useSearchCocktails";

const GlobalContext = React.createContext();

const GlobalProvider = ({ children }) => {
  const [input, setInput] = useState("");
  // const [results, setResults] = useState([]);
  // const [loading, setLoading] = useState(false);

  const { results, loading, error } = useSearchCocktails(input);

  return (
    <GlobalContext.Provider
      value={{
        results,
        input,
        setInput,
        loading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export { GlobalContext, GlobalProvider };
