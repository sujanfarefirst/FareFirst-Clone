import { React, useState } from "react";
import { Dropdown } from "./ResultDropdown";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export const Card = ({ flight }) => {
  return (
    <div className="result-card">
      <div className="airline-logo">
        <img src={flight.from.airlineLogoUrl} alt="Airline Logo" />
      </div>

      <div className="route-info">
        <p className="route">
          {flight.from.iata} - {flight.to.iata}
        </p>
        <p className="name">{flight.gate.name}</p>
      </div>

      <div className="time-info">
        <p className="time">
          {flight.from.time} - {flight.to.time}
        </p>
        <p className="duration">
          {flight.total_duration.h}h {flight.total_duration.m}m
        </p>
      </div>

      <div className="flight-type">Direct</div>

      <div className="price-book">
        <p className="price">
          {flight.price.symbol}
          {flight.price.amount}
        </p>
        <a
          href={flight.gate.redirectUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="book-btn">BOOK NOW</button>
        </a>
      </div>
      
    </div>
  );
};
