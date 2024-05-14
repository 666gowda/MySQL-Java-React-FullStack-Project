import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const ProductDetailsModal = ({ show, handleClose, handleDeleteConfirmed }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>Confirm Deletion</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure you want to delete this product?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="outline-danger" onClick={handleDeleteConfirmed}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProductDetailsModal;
