import React from "react";
import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap";
import logo from "../assets/netflix_logo.png";
import profile from "../assets/avatar.png";
class NavigationBar extends React.Component {
  render() {
    return (
      <header>
        <Navbar collapseOnSelect expand="lg" variant="dark">
          <Container fluid>
            <Navbar.Brand href="#home">
              <img src={logo} alt="logo" id="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#">Home</Nav.Link>
                <Nav.Link href="#">TV Shows</Nav.Link>
                <Nav.Link href="#">Movies</Nav.Link>
                <Nav.Link href="#">Recently Added</Nav.Link>
                <Nav.Link href="#">My List</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="#">Search Icon</Nav.Link>
                <Nav.Link href="#">KIDS</Nav.Link>
                <Nav.Link href="#">Bell icon</Nav.Link>
                <Navbar.Brand href="#home">
                  <img src={profile} alt="profile" id="avatar" />
                </Navbar.Brand>
                <NavDropdown title="Profile">
                  <NavDropdown.Item href="#action/1">Dementor</NavDropdown.Item>
                  <NavDropdown.Item href="#action/2">
                    Manage Profiles
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3">Account</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}

export default NavigationBar;
