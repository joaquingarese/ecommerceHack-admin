import "./styles/sidebar.css";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div id="sidebarCont" className="side-nav-container d-none d-lg-block">
      <Link to={`/`} className="text-decoration-none text-white">
        <div className="title d-flex align-items-center mt-3 mb-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/723/723490.png"
            style={{ height: "25px" }}
            className="ms-3 me-2"
            alt="logoCofee"
          />
          <h3>CoffeeHack</h3>
        </div>
      </Link>
      <Link to={`/`} className="text-decoration-none text-white">
        <div className="list-item d-flex align-items-center mt-3 ms-3 mb-2">
          <i className="bi bi-house-door"></i>
          <p className="mt-auto mb-auto ms-2">Panel de control</p>
        </div>
      </Link>
      <hr />
      <Link to={`/productos`} className="text-decoration-none text-white">
        <div className="list-item d-flex align-items-center ms-3 mb-2">
          <i className="bi bi-bag"></i>
          <p className="mt-auto mb-auto ms-2">Productos</p>
        </div>
      </Link>
      <hr />
      <Link to={`/categorias`} className="text-decoration-none text-white">
        <div className="list-item d-flex align-items-center ms-3 mb-2">
          <i className="bi bi-bookmark"></i>
          <p className="mt-auto mb-auto ms-2">Categorias</p>
        </div>
      </Link>
      <hr />
      <Link to={`/usuarios`} className="text-decoration-none text-white">
        <div className="list-item d-flex align-items-center ms-3 mb-2">
          <i className="bi bi-people"></i>
          <p className="mt-auto mb-auto ms-2">Usuarios</p>
        </div>
      </Link>
      <hr />
      <Link to={`/ordenes`} className="text-decoration-none text-white">
        <div className="list-item d-flex align-items-center ms-3 mb-2">
          <i className="bi bi-cart-check"></i>
          <p className="mt-auto mb-auto ms-2">Órdenes</p>
        </div>
      </Link>
      <hr />
      <a
        href="https://coffeehack-ecommerce.vercel.app/"
        className="text-decoration-none text-white"
      >
        <div className="list-item d-flex align-items-center ms-3 mb-2">
          <i className="bi bi-arrow-left"></i>
          <p className="mt-auto mb-auto ms-2">Volver al e-commerce</p>
        </div>
      </a>
    </div>
  );
}

export default SideBar;
