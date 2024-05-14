import { useEffect } from "react";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import {
  getEmployees,
  getEmployee,
  updateEmployee,
} from "../../services/services";

function UpdateProductArea() {
  // Image view model
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //

  const [employees, setEmployees] = useState([]);
  const [formData, setFormData] = useState({
    product_id: "",
    product_name: "",
    price: "",
    description: "",
    product_code: "",
    release_date: "",
    image_url: "",
    star_rating: "",
  });

  // Use useEffect to fetch employees data when the component mounts
  useEffect(() => {
    async function fetchEmployees() {
      try {
        console.log("Listed all products in sort-order 1");
        const response = await getEmployees(1);
        setEmployees(response.data);
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    }
    fetchEmployees();
  }, []);

  const handleProductChange = async (e) => {
    const selectedProductId = e.target.value;
    setFormData({
      ...formData,
      product_id: selectedProductId,
    });

    try {
      console.log("fetched all data for id : " + selectedProductId);
      const response = await getEmployee(selectedProductId);
      const employeeData = response.data;
      setFormData({
        product_id: employeeData.product_id,
        product_name: employeeData.product_name,
        price: employeeData.price,
        description: employeeData.description,
        product_code: employeeData.product_code,
        release_date: employeeData.release_date,
        image_url: employeeData.image_url,
        star_rating: employeeData.star_rating,
      });
    } catch (error) {
      console.error("Error fetching employee data:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateEmployee(formData.product_id, formData);
      alert("Product updated successfully!");
      // resetting the fields after updating
      setFormData({
        product_id: "",
        product_name: "",
        price: "",
        description: "",
        product_code: "",
        release_date: "",
        image_url: "",
        star_rating: "",
      });
    } catch (error) {
      console.error("Error updating employee:", error);
      alert("Failed to update employee!");
    }
  };

  return (
    <div className="font-monospace">
      <h2>Update Product</h2>
      <hr style={{ width: "90%" }} className="mx-auto" />
      <Form
        onSubmit={handleSubmit}
        style={{ width: "90%" }}
        className="mx-auto"
      >

        <Form.Group controlId="product_id">
          <Form.Label>Select Product ID:</Form.Label>
          <Form.Control
            as="select"
            onChange={handleProductChange}
            value={formData.product_id}
          >
            <option value="">Select Product ID</option>
            {employees.map((employee) => (
              <option key={employee.product_id} value={employee.product_id}>
                {employee.product_id} - {employee.product_name}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="product_name">
          <Form.Label>Product Name:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Product Name"
            value={formData.product_name}
            onChange={(e) =>
              setFormData({ ...formData, product_name: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group controlId="price">
          <Form.Label>Price:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Price"
            value={formData.price}
            onChange={(e) =>
              setFormData({ ...formData, price: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group controlId="description">
          <Form.Label>Description:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Description"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group controlId="product_code">
          <Form.Label>Product Code:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Product Code"
            value={formData.product_code}
            onChange={(e) =>
              setFormData({ ...formData, product_code: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group controlId="release_date">
          <Form.Label>Release Date:</Form.Label>
          <Form.Control
            type="date"
            placeholder="Release Date"
            value={formData.release_date}
            onChange={(e) =>
              setFormData({ ...formData, release_date: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group controlId="image_url">
          <Form.Label className="mt-2">
            Image URL:
            <Button variant="info btn-sm" onClick={handleShow}>
              <i class="fa-solid fa-images"></i>
            </Button>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Image URL"
            value={formData.image_url}
            onChange={(e) =>
              setFormData({ ...formData, image_url: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group controlId="star_rating">
          <Form.Label>Star Rating:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Star Rating"
            value={formData.star_rating}
            onChange={(e) =>
              setFormData({ ...formData, star_rating: e.target.value })
            }
          />
        </Form.Group>
        <br />
        <Button type="submit">Update Product</Button>
      </Form>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{formData.product_name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={formData.image_url}
            alt={formData.image_url}
            className="mx-auto my-auto"
            style={{ width: "400px", height: "auto" }}
          ></img>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default UpdateProductArea;
