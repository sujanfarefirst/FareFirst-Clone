import { FaPlaneDeparture, FaPlaneArrival } from "react-icons/fa";
import "./component.css";
import InputBar from "./InputBar";
import CalendarInput from "./Calender";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [from, setFrom] = useState("Manglore (IXE)");
  const [to, setTo] = useState("Bengaluru (BLR)");
  const [date, setDate] = useState(null);
  const [result, setResult] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeField, setActiveField] = useState(null);
  const [queryFrom, setQueryFrom] = useState("Manglore");
  const [queryTo, setQueryTo] = useState("Bengaluru");
  const navigate = useNavigate();

  const fetchData = async (val) => {
    if (!val) {
      setResult([]);
      setShowSuggestions(false);

      return;
    }
    try {
      const response = await axios.get(
        "https://autocomplete.farefirst.com/places2",
        {
          params: {
            locale: "en",
            max: 7,
            types: ["airport", "city"],
            term: val,
          },
        }
      );
      setResult(response.data);
      setShowSuggestions(true);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  function handleFromSelect(item) {
    setQueryFrom(item.name);
    setFrom(`${item.name} (${item.code})`);
    setShowSuggestions(false);
  }
  function handleToSelect(item) {
    setQueryTo(item.name);
    setTo(`${item.name} (${item.code})`);
    setShowSuggestions(false);
  }

  function handleFromChange(val) {
    setFrom(val);
    fetchData(val);
  }

  function handleToChange(val) {
    setTo(val);
    fetchData(val);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    navigate("/results", { state: { queryFrom, queryTo, date }});
  };

  return (
    <div>
      <form className="search-bar-container" onSubmit={handleSubmit}>
        <InputBar
          plane={<FaPlaneDeparture />}
          placeholder="Manglore(IXE)"
          value={from}
          onChange={handleFromChange}
          handleSelect={handleFromSelect}
          onFocus={() => setActiveField("from")}
          result={activeField === "from" ? result : []}
          showSuggestions={showSuggestions && activeField === "from"}
        />
        <InputBar
          plane={<FaPlaneArrival />}
          placeholder="Bengluru(BLR)"
          value={to}
          onChange={handleToChange}
          handleSelect={handleToSelect}
          onFocus={() => setActiveField("to")}
          result={activeField === "to" ? result : []}
          showSuggestions={showSuggestions && activeField === "to"}
        />
        <CalendarInput selected={date} onChange={(date) => setDate(date)} />
        <div className="search-button-wrapper">
          <button className="search-button" type="submit">
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
