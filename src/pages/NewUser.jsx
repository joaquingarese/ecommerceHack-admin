import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN;

function NewUser() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [imageFile, setImageFile] = useState(null);

  const navigate = useNavigate();

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImageFile(file);
      console.log("Inside if", file);
    }
    console.log("Outside if", file);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios({
      method: "post",
      url: "/users",
      data: {
        firstnameReg: firstname,
        lastnameReg: lastname,
        emailReg: email,
        passwordReg: password,
        phoneReg: phone,
        addressReg: address,
      },
    });
    navigate("/usuarios");
    return response.data;
  };

  return (
    <>
      <div className="container mt-4 mb-4">
        <h2 className="">Crear usuario</h2>
        <p>
          For your convenience, this form has been pre-filled with random data.
        </p>
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
                placeholder="Nombre"
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
                placeholder="Apellido"
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
                type="text"
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
                Dirección
              </label>
              <input
                type="text"
                id="adress"
                className="form-control"
                placeholder="Dirección"
                name="adress"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            <Link to={"/usuarios"}>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleSubmit}
              >
                Enviar
              </button>
            </Link>
          </fieldset>
        </form>
      </div>
    </>
  );
}

export default NewUser;
