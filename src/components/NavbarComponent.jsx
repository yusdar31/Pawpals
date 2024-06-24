// src/components/NavbarComponent.jsx
import React from "react";
import { Navbar, Container, Nav, Image, Dropdown } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/img/PawpalsNavbar.png";
import { useAuth } from '../contexts/useAuth';

const NavbarComponent = () => {
  const { currentUser, userData, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      <Navbar expand="lg" className="nav-bg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <Image src={logo} height={30} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <div className="nav-link">
                <NavLink to="/">Beranda</NavLink>
                <NavLink to="/artikelpage">Artikel</NavLink>
                <NavLink to="/komunitaspage">Komunitas</NavLink>
                <NavLink to="/kontakpage">Kontak</NavLink>
                {currentUser && <NavLink to="/admin/dashboard">Dashboard</NavLink>}
                {currentUser && <NavLink to="/admin/admin">Admin Page</NavLink>}
              </div>
            </Nav>
            <div className="d-flex align-items-center"> 
              {currentUser ? (
                <Dropdown>
                  <Dropdown.Toggle
                    style={{ backgroundColor: "#E38B54", color: "#FFFFFF" }}
                    id="dropdown-basic"
                  >
                    {userData?.name || currentUser.email}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <>
                  <Link to="/registerpage" className="btn btn-primary me-2">Daftar</Link>
                  <Link to="/loginpage" className="btn btn-secondary">Masuk</Link>
                </>
              )}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
