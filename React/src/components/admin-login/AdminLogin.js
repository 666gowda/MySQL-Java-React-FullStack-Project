import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { getAdmin } from "../../services/services";

function AdminLogin() {
  const [showLoginMessage, setShowLoginMessage] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log("validating...");
      const response = await getAdmin();
      const adminUsers = response.data;

      const isAdmin = adminUsers.some(
        (user) => user.admin_email === email && user.admin_password === password
      );

      if (isAdmin) {
        console.log("success");
        setShowLoginMessage(true);
      }
    } catch (error) {
      console.error("Error occurred while logging in:", error);
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>

      {showLoginMessage && (
        <div>
          <span>Successfully logged in.</span>
        </div>
      )}
    </div>
  );
}

export default AdminLogin;
