import React, { useEffect, useState } from "react";
import "./styles/orders.css";
import axios from "axios";
import Table from "react-bootstrap/Table";
import ProductsModal from "../components/ProductsModal";
import { useNavigate } from "react-router-dom";

function Orders() {
  axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN;
  const [orders, setOrders] = useState([]);
  const [selectedOrderId, setSelectedOrderId] = useState(null);

  const navigate = useNavigate();

  const fetchData = async () => {
    const response = await axios({
      method: "get",
      url: `/orders`,
    });

    setOrders(response.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleEditOrder = (orderId) => {
    navigate(`/editar-orden/${orderId}`);
  };

  const handleClose = () => setSelectedOrderId(null);
  const handleShow = (orderId) => setSelectedOrderId(orderId);

  return (
    <div id="ordersContainer">
      <div className="p-3">
        <h5 className="fw-bold pb-3">Órdenes</h5>
        <div className="table-container">
          <Table bordered hover className="table-styles rounded-3">
            <thead>
              <tr className="principal-tr">
                <th className="hideCol">id</th>
                <th>Usuario</th>
                <th className="d-none d-md-table-cell">Precio</th>
                <th className="d-none d-md-table-cell">Estado</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, i) => (
                <tr className="bg-white" key={i}>
                  <td className="hideCol">{order.id}</td>
                  <td>
                    {order.user ? (
                      order.user.firstname + " " + order.user.lastname
                    ) : (
                      <p className="text-danger">Unknown User</p>
                    )}
                  </td>
                  <td className="d-none d-md-table-cell text-muted ">
                    {order.totalPrice}
                  </td>
                  <td className="d-none d-md-table-cell text-muted">
                    {order.status}
                  </td>
                  <td className="edit-td">
                    <button onClick={() => handleEditOrder(order.id)}>
                      Editar
                    </button>
                    <button
                      className="d-none d-md-table-cell"
                      onClick={() => handleShow(order.id)}
                    >
                      Ver más
                    </button>
                  </td>
                  <ProductsModal
                    showModal={selectedOrderId === order.id}
                    handleClose={handleClose}
                    handleShow={handleShow}
                    order={order}
                  />
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default Orders;
