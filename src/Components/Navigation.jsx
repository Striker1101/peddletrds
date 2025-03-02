import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Button, Offcanvas } from "react-bootstrap";

export default function Navigation() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* Desktop Navbar */}
      <Navbar
        expand="lg"
        className="py-3"
        style={{ backgroundColor: "#212529" }}
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src="assets/images/logo.png"
              alt="logo"
              style={{ maxWidth: "200px", height: "50px" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={handleShow}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/" className="text-white p-3">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className="text-white p-3">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/service" className="text-white p-3">
                Service
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" className="text-white p-3">
                Contact
              </Nav.Link>
            </Nav>
            <Button as={Link} to="/login" variant="light" className="ms-3 p-3">
              Join us
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
