import { useState } from "react";
import { FaChevronDown, FaPlaneDeparture, FaChevronUp } from "react-icons/fa";
import { format } from "date-fns";

export const Dropdown = ({ flight, date }) => {
  const [isOpen, setIsOpen] = useState(false);

  const formattedDate = format(date, "EEE, MMM d");

  return (
    <div className="dropdown">
      {isOpen && (
        <div className="dropdown-content">
          <div className="dropdown-content-header">
            <div className="city">
              <FaPlaneDeparture /> {flight.from.info.city} -{" "}
              {flight.to.info.city}
            </div>
            <div>
              <p className="duration">
                {flight.total_duration.h}h {flight.total_duration.m}m
              </p>
            </div>
          </div>
          <div className="dropdown-content-body">
            <div className="date">
              <p>{formattedDate}</p>
            </div>
            <div className="airline-logo">
              <img src={flight.from.airlineLogoUrl} alt="Airline Logo" />
            </div>
            <div className="flight-complete-info">
              <div className="time-info-eco">
                <p className="time">
                  {flight.from.time} - {flight.to.time}
                </p>
                <div className="flight-info">
                  <p>Economy</p>
                  <p className="duration">
                    {flight.total_duration.h}h {flight.total_duration.m}m
                  </p>
                </div>
              </div>

              <div className="city">
                {flight.from.info.city} - {flight.to.info.city}
              </div>
              <div className="airport">
                {flight.from.info.name} - {flight.to.info.name}
              </div>
              <div className="airline">{flight.gate.name}</div>
            </div>
          </div>
        </div>
      )}
      <button className="dropdown-btn" onClick={() => setIsOpen(!isOpen)}>
        {!isOpen ? <FaChevronDown /> : <FaChevronUp />}
      </button>
    </div>
  );
};
