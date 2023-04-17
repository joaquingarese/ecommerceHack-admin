import "./styles/newProduct.css";
import api from "../api/axios";
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function NewProduct() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [photo, setPhoto] = useState(null);
  const [stock, setStock] = useState("");

  const createProduct = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    await api.newProduct(formData);
    navigate("/productos");
  };

  const fetchCategories = async () => {
    const response = await api.getCategories();
    setCategories(response);
    return response.data;
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    categories.length > 0 && (
      <>
        <div id="newProduct">
          <div className="container mt-4 mb-4">
            <h4 className="">Agregar Producto</h4>
          </div>
          <div className="container shadow bg-white p-4 pb-6 rounded-lg ring-1 ring-black ring-opacity-5 mb-4">
            <form className="container" onSubmit={createProduct}>
              <fieldset>
                <div className="mb-3">
                  <label htmlFor="disabledTextInput" className="form-label">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    placeholder="nombre"
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label>
                    Categoría
                    <select
                      name="category"
                      onChange={(e) => setCategory(e.target.value)}
                      className="ms-3"
                      required
                    >
                      <option value="" defaultValue={""} disabled>
                        Seleccionar...
                      </option>
                      {categories.map((category, i) => (
                        <option key={i} value={category.id}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
                <div className="mb-3">
                  <label htmlFor="disabledTextInput" className="form-label">
                    Descripcion
                  </label>
                  <input
                    type="text"
                    id="description"
                    className="form-control"
                    placeholder="descripcion"
                    name="description"
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="disabledTextInput" className="form-label">
                    Foto
                  </label>
                  <input
                    type="file"
                    id="photo"
                    className="form-control"
                    placeholder="photo"
                    name="photo"
                    onChange={(e) => setPhoto(e.target.files[0])}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="disabledTextInput" className="form-label">
                    Precio
                  </label>
                  <input
                    type="number"
                    id="price"
                    className="form-control"
                    placeholder="precio"
                    name="price"
                    onChange={(e) => setPrice(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="disabledTextInput" className="form-label">
                    Stock
                  </label>
                  <input
                    type="number"
                    id="stock"
                    className="form-control"
                    placeholder="stock"
                    name="stock"
                    onChange={(e) => setStock(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <button type="submit" className="btn btnSend">
                    Enviar
                  </button>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </>
    )
  );
}

export default NewProduct;
