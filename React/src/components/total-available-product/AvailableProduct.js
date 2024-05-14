import React, { useEffect, useState } from "react";
import { getEmployees } from "../../services/services";
import "bootstrap/dist/css/bootstrap.min.css";

const AvailableProducts = () => {
  const [productIds, setProductIds] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const [requestComplete, setRequestComplete] = useState(false);

  const getProductIds = () => {
    getEmployees(1)
      .then((httpResponse) => {
        const records = httpResponse.data;
        const ids = records.map((record) => record.product_id);
        setProductIds(ids);
        setTotalProducts(ids.length);
        setErrorMessage("");
        setRequestComplete(true);
      })
      .catch((err) => {
        setProductIds([]);
        setTotalProducts(0);
        setErrorMessage(err.message);
        setRequestComplete(true);
      });
  };

  useEffect(() => {
    getProductIds();
  }, []);

  let design;
  if (!requestComplete) {
    design = <span>Loading...please wait</span>;
  } else if (errorMessage !== "") {
    design = <span>{errorMessage}</span>;
  } else {
    design = (
      <div style={{ height: "20px" }}>
        <div className="border-bottom my-2">
          <p className="font-monospace fs-4">Available Products</p>
        </div>
        <div className="">
          <h2>{totalProducts}</h2>
        </div>
      </div>
    );
  }
  return design;
};

export default AvailableProducts;
