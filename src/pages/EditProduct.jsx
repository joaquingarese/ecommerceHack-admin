import React, { useState, useEffect } from "react";
import "./styles/edit.css";
import axios from "axios";
import api from "../api/axios";
import { useParams, useNavigate } from "react-router-dom";

function Edit() {
  axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN;
  const [product, setProduct] = useState(null);
  const params = useParams();
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [formValue, setFormValue] = useState({
    name: "",
    category: "",
    description: "",
    price: "",
    stock: "",
    photo: null,
  });

  const fetchCategories = async () => {
    const response = await axios({
      method: "get",
      url: "/categories",
    });
    setCategories(response.data);
    return response.data;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleImage = (event) => {
    setFormValue({ ...formValue, ["photo"]: event.target.files[0] });
  };

  const getProduct = async () => {
    const response = await axios({
      method: "get",
      url: `/products/${params.slug}`,
    });
    return response.data;
  };
  const fetchData = async () => {
    const product = await getProduct();
    setProduct(product);
    setFormValue({
      name: product.name,
      category: product.category.id,
      description: product.description,
      price: product.price,
      stock: product.price,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setFormValue({
      ...formValue,
    });

    const response = await axios({
      method: "patch",
      url: `/products/${params.slug}`,
      headers: { "Content-Type": "multipart/form-data" },
      data: formValue,
    });
    console.log("formValue", formValue);
    navigate("/productos");

    return response.data;
  };

  const handleDelete = async (event) => {
    event.preventDefault();
    const response = await api.deleteProduct(params.slug);
    console.log(response);
    navigate("/productos");
    return;
  };

  useEffect(() => {
    fetchData();
    fetchCategories();
  }, []);

  return (
    product &&
    categories.length > 0 && (
      <>
        {" "}
        <div id="newProduct">
          <div className="container mt-4 mb-4">
            <h4 className="">Editar Producto</h4>
          </div>
          <div className="container shadow bg-white p-4 pb-6 rounded-lg ring-1 ring-black ring-opacity-5 mb-4">
            <form className="container" onSubmit={handleSubmit}>
              <fieldset>
                <div className="mb-3">
                  <label htmlFor="disabledTextInput" className="form-label">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    placeholder={product.name}
                    name="name"
                    value={formValue.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label>
                    Categoria
                    <select
                      required
                      name="category"
                      value={formValue.category}
                      onChange={handleChange}
                      className="ms-2"
                    >
                      <option value="" disabled>
                        Seleccionar...
                      </option>
                      {categories.map((category, i) => (
                        <option
                          key={i}
                          value={category.id}
                          selected={category.id === product.category.id}
                        >
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
                    placeholder={product.description}
                    name="description"
                    value={formValue.description}
                    onChange={handleChange}
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
                    onChange={handleImage}
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
                    placeholder={product.price}
                    name="price"
                    value={formValue.price}
                    onChange={handleChange}
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
                    placeholder={product.stock}
                    name="stock"
                    value={formValue.stock}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="disabledTextInput" className="form-label">
                    Featured
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="verdadero"
                    id="inlineRadio1"
                    value="verdadero"
                  />
                  <label className="form-check-label" htmlFor="inlineRadio1">
                    Verdadero
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="falso"
                    id="inlineRadio2"
                    value="falso"
                  />
                  <label className="form-check-label" htmlFor="inlineRadio2">
                    Falso
                  </label>
                </div>
                <div className="d-flex">
                  <button type="submit" className="btn btnSend mt-2">
                    Enviar
                  </button>
                  <button
                    type="submit"
                    className="btn btn-danger ms-auto"
                    onClick={(e) => handleDelete(e)}
                  >
                    Eliminar
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

export default Edit;
