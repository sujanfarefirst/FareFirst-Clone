import React, { useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import { Card } from "./ResultCard";
import { Dropdown } from "./ResultDropdown";

export const FlightResult = ({ results, loading, date }) => {
  const [visibleCount, setVisibleCount] = useState(5);
  const validResults = results.filter(
    (flight) =>
      flight?.from &&
      flight?.to &&
      flight?.total_duration &&
      flight?.price?.amount
  );

  if (loading) {
    return (
      <div className="loading-screen">
        <Spinner animation="border" variant="danger" />
        <p>Fetching flights...</p>
      </div>
    );
  }

  if (!Array.isArray(results) || results.length === 0) {
    return <p>No flights found.</p>;
  }

  const handleMore = () => {
    const remResult = validResults.length - 5;
    setVisibleCount((prev) => prev + remResult);
  };

  return (
    <div className="result-container">
      <div className="flights-header">
        <h2 className="flights-title">
          <span>Cheapest Flights</span>
        </h2>
        <p className="flights-subtitle">Find the best deals for your trip</p>
      </div>

      <div className="flight-search-result">
        {validResults.slice(0, visibleCount).map((flight, index) => (
          <div key={index} className="card-container">
            <Card flight={flight}></Card>
            <div className="dropdown-container">
              <Dropdown flight={flight} date={date} />
            </div>
          </div>
        ))}
      </div>
      {visibleCount < validResults.length && (
        <button onClick={handleMore} className="load-more-btn">
          Load more
        </button>
      )}
    </div>
  );
};
