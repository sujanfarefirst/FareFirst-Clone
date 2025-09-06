import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaRegCalendarAlt } from "react-icons/fa";
import "./component.css";
import { format } from "date-fns";

function CalendarInput({ onChange, selected }) {
  const handleChange = (date) => {
    const formattedDate = format(date, "yyyy-MM-dd");
    onChange(formattedDate);
  };

  return (
    <div className>
      <div className="input-wrapper">
        <div className="flight-input-logo">
          <FaRegCalendarAlt />
        </div>
        <DatePicker
          selected={selected ? new Date(selected) : null}
          onChange={handleChange}
          placeholderText="Select Date"
          required
        />
      </div>
    </div>
  );
}

export default CalendarInput;
