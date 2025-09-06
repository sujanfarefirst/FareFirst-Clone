import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "../layouts/Navigation";
import Footer from "../layouts/footer";
import { FlightSearch } from "../components/FlightSearch";
import { Download } from "../components/Download";
import { TravelAgencies } from "../components/Agencies";
import { Header } from "../components/Header";
import { Destination } from "../components/Destination";

function Home() {
  return (
    <div>
      <Header/>
      <TravelAgencies />
      <Destination/>
      <Download />
      <Footer />
    </div>
  );
}

export default Home;
