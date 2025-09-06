import React from "react";
import SearchBar from "./SearchBar";
import "./component.css";
import { Ads } from "./Ads";

export const FlightSearch = () => {
  return (
    <div className="navbar-search-container">
      <div className="container">
        <div className="flight-search">
          <h2 className="text-white">Book a Flight</h2>
          <p >Search hundreds of travel at once</p>
          <SearchBar />
          <Ads/>
        </div>
      </div>
    </div>
  );
};
