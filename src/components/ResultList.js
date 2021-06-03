import React from "react";
import { useGlobalContext } from "../context/GlobalContext";

import Result from "./Result";
import LoadingAnimation from "./LoadingAnimation";

const ResultList = () => {
  const { results, loading, error } = useGlobalContext();

  if (loading) {
    return <LoadingAnimation />;
  }

  if (results.length < 1) {
    return <h2 className="info-box">No results found</h2>;
  }

  if (error.errorMessage) {
    return (
      <div className="info-box">
        <p className="error-message">{error.errorMessage}</p>
      </div>
    );
  }

  return (
    <section className="result-section">
      {results.map((result) => {
        return <Result key={result.id} {...result} />;
      })}
    </section>
  );
};

export default ResultList;
