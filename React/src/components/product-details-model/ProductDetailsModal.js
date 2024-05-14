import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const ProductDetailsModal = ({ show, handleClose, product }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton style={{ backgroundColor: "#F8E831" }}>
        <Modal.Title>{product.product_name}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-dark">
        <img
          src={product.image_url}
          style={{ width: "400px", height: "auto" }}
        ></img>

        <table class="table table-hover table-dark">
          <thead>
            <tr>
              <th scope="col">Key</th>
              <th scope="col">Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">ID: </th>
              <td>{product.product_id}</td>
            </tr>
            <tr>
              <th scope="row">Name: </th>
              <td>{product.product_name}</td>
            </tr>
            <tr>
              <th scope="row">Price: </th>
              <td>{product.price}</td>
            </tr>
            <tr>
              <th scope="row">Description: </th>
              <td>{product.description}</td>
            </tr>
            <tr>
              <th scope="row">Product Code: </th>
              <td>{product.product_code}</td>
            </tr>
            <tr>
              <th scope="row">Release Date: </th>
              <td>{product.release_date}</td>
            </tr>
            <tr>
              <th scope="row">Star Rating: </th>
              <td>{product.star_rating}</td>
            </tr>
          </tbody>
        </table>
      </Modal.Body>
    </Modal>
  );
};

export default ProductDetailsModal;
