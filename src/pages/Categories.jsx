import React from "react";
import "./styles/products.css";
import api from "../api/axios";
import Table from "react-bootstrap/Table";
import { useState, useEffect } from "react";

function Categories() {
  const [categories, setCategories] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [formValue, setFormValue] = useState({
    newCategoryName: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const createCategory = async (e) => {
    e.preventDefault();
    await api.newCategory(formValue);
    fetchCategories();
    return;
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
    <div id="productContainer" className="">
      <div className="container">
        <div className="d-flex justify-content-between">
          <h5 className="fw-bold mt-4">Categorías</h5>
        </div>
        <div className="border table-container">
          <Table bordered hover className="table-styles rounded-3">
            <thead>
              <tr className="tableFirst">
                <th scope="col">Nombre</th>
                <th scope="col">Productos</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category) => {
                return (
                  <tr key={category.id}>
                    <td>{category.name}</td>
                    <td>
                      {category.products.map((product) => {
                        return <p key={product.id}>{product.name}</p>;
                      })}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
        <form className="mb-3" onSubmit={createCategory}>
          <label htmlFor="disabledTextInput" className="form-label">
            Nueva Categoría:
          </label>
          <input
            type="text"
            id="name"
            className="form-control"
            placeholder="Nombre de la nueva categoría..."
            name="newCategoryName"
            value={formValue.name}
            onChange={handleChange}
            required
          />
          <button className="btnAdd btn mt-4">Crear Categoría</button>
        </form>
      </div>
    </div>
  );
}

export default Categories;
