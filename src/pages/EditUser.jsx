import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import api from "../api/axios";
axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN;

function EditUser(props) {
  const [user, setUser] = useState([]);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [photo, setPhoto] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [message, setMessage] = useState("");

  const params = useParams();
  const navigate = useNavigate();

  const fetchData = async () => {
    const user = await api.getUser(params.id);

    setUser(user);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (user) {
      setFirstname(user.firstname);
      setLastname(user.lastname);
      setEmail(user.email);
      setPhone(user.phone);
      setAddress(user.address);
      setPhoto(user.photo);
      setIsAdmin(user.isAdmin);
    }
  }, [user]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password === "") {
      setMessage("Debe ingresar una contraseña!");
      return;
    }

    const response = await axios({
      method: "patch",
      url: `/users/${params.id}`,
      data: {
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
        phone: phone,
        address: address,
        photo: photo,
        isAdmin: isAdmin,
      },
    });
    setMessage("");
    navigate("/usuarios");
    return response.data;
  };

  const handleDelete = async (event) => {
    event.preventDefault();
    const response = await api.deleteUser(params.id);
    navigate("/usuarios");
    console.log(response);
    return;
  };

  return (
    <>
      <div className="container mt-4 mb-4">
        <h2 className="">Editar Usuario</h2>
      </div>
      <div className="container shadow bg-white p-4 pb-6 rounded-lg ring-1 ring-black ring-opacity-5 mb-4">
        <form className="" onSubmit={handleSubmit}>
          <fieldset>
            <div className="mb-3">
              <label htmlFor="disabledTextInput" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                id="firstname"
                className="form-control"
                name="firstname"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="disabledTextInput" className="form-label">
                Apellido
              </label>
              <input
                type="text"
                id="lastname"
                className="form-control"
                placeholder="lastname"
                name="lastname"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="disabledTextInput" className="form-label">
                Email
              </label>
              <input
                type="text"
                id="email"
                className="form-control"
                placeholder="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="disabledTextInput" className="form-label">
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                className="form-control"
                placeholder="Contraseña"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="disabledTextInput" className="form-label">
                Teléfono
              </label>
              <input
                type="text"
                id="phone"
                className="form-control"
                placeholder="Teléfono"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="disabledTextInput" className="form-label">
                Direccion
              </label>
              <input
                type="text"
                id="adress"
                className="form-control"
                placeholder="Direccion"
                name="adress"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="disabledTextInput" className="form-label">
                Foto
              </label>
              <input
                type="text"
                id="photo"
                className="form-control"
                placeholder="Foto"
                name="photo"
                value={photo}
                onChange={(e) => setPhoto(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="isAdmin" className="form-label me-2">
                Administrador
              </label>
              <input
                type="checkbox"
                id="isAdmin"
                name="isAdmin"
                value={isAdmin}
                checked={isAdmin}
                onChange={(e) => setIsAdmin(e.target.checked)}
              />
            </div>
            {message !== "" && <p className="text-danger">{message}</p>}
            <div className="d-flex justify-content-between">
              <Link to={"/usuarios"}>
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={handleSubmit}
                >
                  Enviar
                </button>
              </Link>
              <button
                type="submit"
                className="btn btn-danger"
                onClick={(e) => handleDelete(e)}
              >
                Eliminar
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </>
  );
}

export default EditUser;
