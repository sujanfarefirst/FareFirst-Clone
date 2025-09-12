import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { FlightResult } from "../components/FlightResult";
import NavigationBar from "../layouts/Navigation";
import SearchBar from "../components/SearchBar";
import Footer from "../layouts/footer";

function Results() {
  const location = useLocation();
  const { queryFrom, queryTo, date } = location.state || {};
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://funapiproxy-4mqabsrzhq-uc.a.run.app/flights",
          {
            params: {
              from: queryFrom,
              locale: "IN",
              to: queryTo,
              departureDate: date,
              client: "bixby",
              key: 1,
            },
          }
        );

        setResults(response.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [queryFrom, queryTo, date]);

  return (
    <div>
      <div className="header">
        <NavigationBar />
        <div className="result-search-container ">
          <SearchBar />
        </div>
      </div>

      <FlightResult results={results} loading={loading} date={date} />
      <Footer />
    </div>
  );
}

export default Results;
