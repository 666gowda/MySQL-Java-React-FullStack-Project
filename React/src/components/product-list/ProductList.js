import React, { useEffect, useState } from "react";
import { getEmployees, deleteEmployee } from "../../services/services";
import Dropdown from "react-bootstrap/Dropdown";
import ProductDetailsModal from "../product-details-model/ProductDetailsModal";
import ProductDeleteModel from "../product-delete-model/ProductDeleteModel";
import "./ProductList.css";
import Pagination from "react-bootstrap/Pagination";

const EmployeeList = (props) => {
  const [searchquery, setSearchQuery] = useState("");
  // pagination
  let active = 1;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }
  //

  const [employees, setEmployees] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [requestComplete, setRequestComplete] = useState(false);
  const [sortBy, setSortBy] = useState(1);
  const [show, setShow] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  const handleClose = () => {
    setShow(false);
    setShowConfirmationModal(false);
  };

  const handleShow = (product) => {
    setSelectedProduct(product);
    setShow(true);
  };

  const getData = () => {
    getEmployees(sortBy)
      .then((httpResponse) => {
        const records = httpResponse.data;
        setEmployees(records);
        setErrorMessage("");
        setRequestComplete(true);
      })
      .catch((err) => {
        setEmployees(undefined);
        setErrorMessage(err.message);
        setRequestComplete(true);
      });
  };

  useEffect(() => {
    getData();
  }, [sortBy]);

  const handleAction = (action, productId) => {
    console.log(`Performing ${action} on product ${productId}`);
    if (action === "Delete") {
      setSelectedProduct(productId);
      setShowConfirmationModal(true);
    }
  };

  const handleDeleteConfirmed = () => {
    deleteEmployee(selectedProduct)
      .then(() => {
        console.log(`Product ${selectedProduct} deleted successfully`);
        setShowConfirmationModal(false);
        getData();
      })
      .catch((err) => {
        console.error("Error deleting product:", err);
      });
  };

  const renderStarRating = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(
        <span key={i} className="star">
          &#9733;
        </span>
      );
    }
    return stars;
  };

  let filterProdcut = employees.filter((employee) => {
    return employee.product_name
      .toLowerCase()
      .includes(searchquery.toLowerCase().trim());
  });

  let design;
  if (!requestComplete) {
    design = (
      <button class="btn btn-primary" type="button" disabled>
        <span
          class="spinner-border spinner-border-sm"
          role="status"
          aria-hidden="true"
        ></span>
        Loading...
      </button>
    );
  } else if (errorMessage !== "") {
    design = <span>{errorMessage}</span>;
  } else if (!employees || employees.length === 0) {
    design = <span>No records</span>;
  } else {
    design = (
      <>
        <h2 className="font-monospace pt-2">Available Products</h2>

        <div className="font-monospace row bg-light" style={{ width: "100%" }}>
          <div className="col-6">
            <select
              className="rounded shadow-sm"
              style={{ backgroundColor: "#EFF3FC" }}
              value={sortBy}
              onChange={(e) => setSortBy(parseInt(e.target.value))}
            >
              {[
                { value: 1, label: "Sort by Rating" },
                { value: 2, label: "Sort by Name (A-Z)" },
                { value: 3, label: "Sort by Price (Low-High)" },
                { value: 4, label: "Sort by Price (High-Low)" },
              ].map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="col-6">
            <input
              value={searchquery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
              }}
              className="rounded shadow-sm border-1 ps-1"
              style={{ height: "24px", backgroundColor: "#EFF3FC" }}
              type="text"
              placeholder="Filter by..."
            ></input>
          </div>
        </div>

        <hr style={{ width: "95%" }} className="mx-auto" />
        <div className="row row-cols-1 ms-1 row-cols-md-4 g-4 font-monospace me-4">
          {filterProdcut.map((e) => (
            <div className="col" key={e.product_id}>
              <div
                className="card h-100 w-100 rounded shadow mx-2"
                id="product-card"
              >
                {/* ProductName */}
                <div
                  style={{ height: "45px", backgroundColor: "#047BD5 " }}
                  className="row mx-auto w-100 rounded-top"
                >
                  <h5 className="card-title text-light pt-2 col-8">
                    <span style={{ fontSize: "1.1rem" }}>
                      <b>{e.product_name}</b>
                    </span>
                  </h5>
                  <Dropdown className="col-4 pt-1">
                    <Dropdown.Toggle
                      variant="bg-light border-0"
                      id="dropdown-basic"
                    >
                      <i class="fa-solid fa-ellipsis-vertical"></i>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item
                        variant="primary"
                        onClick={() => handleShow(e)}
                      >
                        View
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => handleAction("Delete", e.product_id)}
                      >
                        Delete
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <div className="d-flex justify-content-center align-items-around my-auto">
                  <img
                    src={e.image_url}
                    className="card-img-top"
                    alt={e.product_name}
                  />
                </div>

                <div
                  id="price-tab"
                  className="card-body row d-flex align-items-end justify-content-center"
                >
                  <span
                    className="text-warning starrating font-monospace"
                    style={{ fontSize: "1.2rem" }}
                  >
                    {renderStarRating(e.star_rating)}
                  </span>
                  <p className="card-text border-top pt-2">
                    Price: {e.price} /RS &nbsp;
                    {/* <span
                      className="text-success font-monospace"
                      style={{ fontSize: "0.9rem" }}
                    >
                      <u>({e.star_rating})</u>
                    </span> */}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <br />
        <br />
        <div>
          <div className="ms-4">
            <Pagination>{items}</Pagination>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      {design}
      {/* Confirmation modal for delete action */}
      <ProductDeleteModel
        show={showConfirmationModal}
        handleClose={handleClose}
        handleDeleteConfirmed={handleDeleteConfirmed}
      />

      {/* Product details modal */}
      {selectedProduct && (
        <ProductDetailsModal
          show={show}
          handleClose={handleClose}
          product={selectedProduct}
        />
      )}
    </>
  );
};

export default EmployeeList;
