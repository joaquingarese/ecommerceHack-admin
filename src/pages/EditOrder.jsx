import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./styles/editOrderForm.css";
import api from "../api/axios";
axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN;

function EditOrder(props) {
  const [order, setOrder] = useState(null);
  const [address, setAddress] = useState("");
  const [status, setStatus] = useState("");
  const [products, setProducts] = useState("");
  const [totalPrice, setTotalPrice] = useState("");

  const params = useParams();
  const navigate = useNavigate();

  const getOrder = async () => {
    const response = await axios({
      method: "get",
      url: `/orders/${params.id}`,
    });
    return response.data;
  };

  const fetchData = async () => {
    const order = await getOrder();
    setOrder(order);
  };
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (order) {
      setAddress(order.address);
      setStatus(order.status);
      setTotalPrice(order.totalPrice);
    }
  }, [order]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await axios({
      method: "patch",
      url: `/orders/${params.id}`,
      data: {
        address: address,
        status: status,
        totalPrice: totalPrice,
      },
    });
    navigate("/ordenes");
    return response.data;
  };

  const handleDelete = async (event) => {
    event.preventDefault();
    const response = await api.deleteOrder(params.id);
    navigate("/ordenes");
    console.log(response);
    return;
  };

  return (
    order && (
      <div id="editarOrdenContainer">
        <div className="container mt-4 mb-4">
          <h2 className="">Editar orden</h2>
        </div>
        <div className="container shadow bg-white p-4 pb-6 rounded-lg ring-1 ring-black ring-opacity-5 mb-4">
          <form className="" onSubmit={handleSubmit}>
            <fieldset>
              <div class="mb-3">
                <label htmlFor="disabledTextInput" class="form-label">
                  Direccion
                </label>
                <input
                  type="text"
                  id="address"
                  class="form-control"
                  placeholder={order.address}
                  name="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div class="mb-3">
                <label>
                  Estado
                  <select
                    name="status"
                    onChange={(e) => setStatus(e.target.value)}
                    className="ms-3"
                    required
                  >
                    <option value="" selected disabled>
                      Seleccionar...
                    </option>
                    <option value="Preparando pedido">Preparando pedido</option>
                    <option value="En transito">En transito</option>
                    <option value="Entregado">Entregado</option>
                  </select>
                </label>
              </div>

              <div class="mb-3">
                <label htmlFor="disabledTextInput" class="form-label">
                  Precio total
                </label>
                <input
                  type="text"
                  id="totalPrice"
                  class="form-control"
                  placeholder={order.totalPrice}
                  name="totalPrice"
                  value={totalPrice}
                  onChange={(e) => setTotalPrice(e.target.value)}
                />
              </div>
              <div className="d-flex justify-content-between">
                <Link to={"/ordenes"}>
                  <button
                    type="submit"
                    className="btn btnSend"
                    onClick={handleSubmit}
                  >
                    Enviar
                  </button>
                </Link>
                <button
                  type="submit"
                  class="btn btn-danger"
                  onClick={(e) => handleDelete(e)}
                >
                  Eliminar
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    )
  );
}

export default EditOrder;
