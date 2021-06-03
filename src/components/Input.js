import React from "react";
import { useGlobalContext } from "../context/GlobalContext";

const Input = () => {
  const { input, setInput } = useGlobalContext();

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="input-box">
        <h2 className="input-title">Search for a cocktail</h2>
        <input
          type="text"
          placeholder="Search..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
    </form>
  );
};

export default Input;
