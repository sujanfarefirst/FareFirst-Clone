import "./layout.css";
import { Navbar, Nav, Container, Badge } from "react-bootstrap";
import farefirst from "../assets/download.svg";
import INR from "../assets/INR.jpg";

function NavigationBar() {
  return (
    <div>
      <Navbar expand="lg" variant="dark" className="custom-navbar">
        <Container fluid style={{ width: "90vw" }}>
          <Navbar.Brand href="/">
            <img src={farefirst} alt="FareFirst" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarText" />

          <Navbar.Collapse id="navbarText">
            <Nav
              variant="underline"
              defaultActiveKey="#"
              className="me-auto main-nav"
            >
              <Nav.Link href="/">Flights</Nav.Link>
              <Nav.Link href="https://www.farefirst.com/hotels" target="_blank">
                Hotels
              </Nav.Link>
              <Nav.Link href="https://www.farefirst.com/cars" target="_blank">
                Cars
              </Nav.Link>
              <Nav.Link href="https://www.farefirst.com/nomad" target="_blank">
                Nomad
              </Nav.Link>
              <Nav.Link href="https://www.farefirst.com/esim" target="_blank">
                eSim <Badge bg="danger">New</Badge>
              </Nav.Link>
              <Nav.Link href="https://www.farefirst.com/visa" target="_blank">
                Visa
              </Nav.Link>
              <Nav.Link
                href="https://www.farefirst.com/experience"
                target="_blank"
              >
                Experience
              </Nav.Link>
            </Nav>

            <Nav variant="underline" className="right-nav">
              <Nav.Link
                href="https://www.farefirst.com/in/offers"
                target="_blank"
              >
                Offers
              </Nav.Link>
              <Nav.Link href="#">
                <img src={INR} alt="INR" style={{ width: "20px" }} /> INR
              </Nav.Link>
              <Nav.Link href="#">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
