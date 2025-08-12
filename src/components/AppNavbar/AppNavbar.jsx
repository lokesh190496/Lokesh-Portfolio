import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const PortfolioNavbar = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/experience', label: 'Experience' },
    { path: '/skills', label: 'Skills' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <Navbar expand="lg" className="navbar-custom">
      <Container>
        <Navbar.Brand as={Link} to="/" className="navbar-brand">
          PORTFOLIO
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler">
          <span className="navbar-toggler-icon-custom">
          </span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {navItems.map((item) => (
              <Nav.Link
                as={Link}
                key={item.path}
                to={item.path}
                className={`nav-item-link ${location.pathname === item.path ? 'active' : ''}`}
              >
                {item.label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default PortfolioNavbar;
