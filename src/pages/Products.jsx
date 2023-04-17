import React from "react";
import "./styles/products.css";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Product() {
  axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN;
  const [products, setProducts] = useState([]);
  const fetchData = async () => {
    const getProducts = await axios({
      method: "get",
      url: "/products",
    });
    setProducts(getProducts.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div id="productContainer" className="">
      <div className="container">
        <div className="d-flex justify-content-between">
          <h5 className="fw-bold mt-4">Productos</h5>
          <Link to={"/nuevo-producto"}>
            {" "}
            <button className="btnAdd btn mt-4">Crear producto</button>{" "}
          </Link>
        </div>
        <div className="border table-container">
          <Table bordered hover className="table-styles rounded-3">
            <thead>
              <tr className="tableFirst">
                <th scope="col">Nombre</th>
                <th scope="col">Precio (USD)</th>
                <th className="stockHidden" scope="col">
                  Stock
                </th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, i) => {
                let stockClass = "";
                let displayIcon = "none";
                if (product.stock < 3) {
                  stockClass = "stock-red";
                  displayIcon = "inline";
                }

                return (
                  <tr key={i} className="bg-white">
                    <th scope="row tableGlobal">{product.name}</th>
                    <td>{product.price}</td>
                    <td className={` ${stockClass} stockHidden`}>
                      {product.stock}{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="icon-warning"
                        style={{ display: ` ${displayIcon}` }}
                      >
                        <path
                          fillRule="evenodd"
                          d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </td>
                    <td className="edit-td">
                      <Link
                        to={`/editar-producto/${product.slug}`}
                        className="text-decoration-none"
                      >
                        <button>Editar</button>
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default Product;
