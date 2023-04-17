import Container from "react-bootstrap/Container";
import "./styles/navbar.css";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/userReducer";

function NavBar() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
    return;
  };

  const handleLogin = () => {
    navigate("/login");
    return;
  };

  return (
    <Navbar id="navbarTopCont" className="top-nav-bar shadow-sm">
      <Container>
        <Navbar.Brand href="#home" className="d-flex">
          <Button
            className="burger-btn btn bg-transparent d-block d-lg-none"
            onClick={handleShow}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="black"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </Button>
          <h2 className="mt-auto mb-auto ms-3 fw-bold">
            Panel de Administrador
          </h2>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end me-5 pe-5">
          <Navbar.Text>
            <NavDropdown
              title={
                <img
                  src="https://w7.pngwing.com/pngs/306/70/png-transparent-computer-icons-management-admin-silhouette-black-and-white-neck-thumbnail.png"
                  alt="Foto de Pedro"
                  className="rounded-circle nav-img"
                />
              }
              id="basic-nav-dropdown"
              className="drop-down-menu-styles"
            >
              <NavDropdown.Item onClick={() => navigate("/usuarios")}>
                Usuarios
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/ordenes")}>
                Ordenes
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/productos")}>
                Productos
              </NavDropdown.Item>
              <NavDropdown.Divider />
              {token ? (
                <NavDropdown.Item href="#action/3.4" onClick={handleLogout}>
                  Cerrar sesión
                </NavDropdown.Item>
              ) : (
                <NavDropdown.Item href="#action/3.4" onClick={handleLogin}>
                  Iniciar Sesion
                </NavDropdown.Item>
              )}
            </NavDropdown>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="title">
            <Link to={`/`} className="text-decoration-none text-dark">
              <div className="d-flex align-items-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/723/723490.png"
                  style={{ height: "25px" }}
                  className="ms-3 me-2"
                  alt="logoCofee"
                />
                <h4>CoffeeHack</h4>
              </div>
            </Link>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Link to={`/`} className="text-decoration-none text-dark">
            <div className="list-item d-flex align-items-center mt-2 ms-3 mb-2">
              <i className="bi bi-house-door"></i>
              <p className="mt-auto mb-auto ms-2">Dashboard</p>
            </div>
          </Link>
          <Link to={`/productos`} className="text-decoration-none text-dark">
            <div className="list-item d-flex align-items-center ms-3 mb-2">
              <i className="bi bi-bag"></i>
              <p className="mt-auto mb-auto ms-2">Productos</p>
            </div>
          </Link>
          <Link to={`/usuarios`} className="text-decoration-none text-dark">
            <div className="list-item d-flex align-items-center ms-3 mb-2">
              <i className="bi bi-people"></i>
              <p className="mt-auto mb-auto ms-2">Usuarios</p>
            </div>
          </Link>
          <Link to={`/ordenes`} className="text-decoration-none text-dark">
            <div className="list-item d-flex align-items-center ms-3 mb-2">
              <i className="bi bi-cart-check"></i>
              <p className="mt-auto mb-auto ms-2">Órdenes</p>
            </div>
          </Link>
          <hr />
          <Link to={`/ordenes`} className="text-decoration-none text-dark">
            <a
              href="http://localhost:3000/"
              className="text-decoration-none text-dark"
            >
              <div className="list-item d-flex align-items-center ms-3 mb-2">
                <i className="bi bi-arrow-left"></i>
                <p className="mt-auto mb-auto ms-2">Volver a la página</p>
              </div>
            </a>
          </Link>
        </Offcanvas.Body>
      </Offcanvas>
    </Navbar>
  );
}

export default NavBar;
