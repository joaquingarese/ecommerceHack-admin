import React, { useState } from "react";
import "./styles/login.css";
import api from "../api/axios";
import { setToken } from "../redux/userReducer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const authenticate = async () => {
    try {
      const token = await api.adminLogin({ email, password });
      dispatch(setToken(token));
      if (token === "No se pudo loguear") {
        setMessage("Credenciales incorrectas");
      } else {
        navigate("/");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    authenticate();
  };

  return (
    <div id="loginContainer">
      <div className="w-100 h-100 login-container d-flex flex-column align-items-center">
        <h2 className="fw-bold">Login</h2>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-10 col-sm-10 col-md-8 col-lg-8 col-xl-6 mx-sm-3 form-container mt-3 rounded">
              <form onSubmit={handleSubmit} className="ms-2 p-1">
                <label htmlFor="email" className="fw-bold label-text">
                  Ingresa tu Correo electrónico
                </label>
                <input
                  type="text"
                  name="email"
                  className="form-control mt-1"
                  placeholder="admin@admin.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
                <label htmlFor="password" className="mt-3 fw-bold label-text">
                  Ingresa tu contraseña
                </label>
                <input
                  type="password"
                  name="password"
                  className="form-control mt-1 "
                  placeholder="123"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
                {message !== "" && (
                  <p className="text-danger fw-bold mt-4">{message}</p>
                )}
                <div className="d-flex justify-content-center w-100 mt-3">
                  <button
                    type="submit"
                    className="btn secondary-color-bg text-white mt-3 fw-bold w-100"
                  >
                    Iniciar sesión
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
