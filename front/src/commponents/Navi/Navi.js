import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';


function Navi() {
  return (
    <div>
      <Navbar expand="lg" className="bg-success">
        <Container fluid>
          <Navbar.Brand as={Link} to="/" className="text-light fw-bold me-5">Employeer</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }}>
              <li className="nav-item">
                <Link to="/add" className="nav-link text-light fw-bold me-5">ADD</Link>
              </li>
              <li className="nav-item">
                <Link to="/all" className="nav-link text-light fw-bold me-5">ALL</Link>
              </li>
              
            </ul>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success" className="text-light fw-bold me-3">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navi;