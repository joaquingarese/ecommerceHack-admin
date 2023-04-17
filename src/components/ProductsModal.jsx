import React from "react";
import "./styles/productsModal.css";
import { Modal, Button } from "react-bootstrap";

function ProductsModal({ showModal, handleClose, order }) {
  return (
    <Modal show={showModal} onHide={handleClose} id="custom-modal">
      <Modal.Header closeButton>
        <Modal.Title>
          Orden de {order.user ? order.user.firstname + " " + order.user.lastname : <p className="text-danger d-inline">"Unknown User"</p>} (<small>{order.id})</small>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="my-2">
          <p className="fw-bold"> Productos:</p>{" "}
          {order.products.map((product, i) => {
            return (
              <small key={i} className="d-block">
                {product.name} x {product.quantity}
              </small>
            );
          })}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ProductsModal;
