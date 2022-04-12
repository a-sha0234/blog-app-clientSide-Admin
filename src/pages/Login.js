import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";

export default function Login() {
  const [formData, setFormData] = React.useState({});
  const [username, setUsername] = React.useState({});
  const [password, setPassword] = React.useState({});

  return (
    <Form>
      {" "}
      <Form.Label>Username</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter email"
        name="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      {/*  */}
      <Form.Label>Password</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter email"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      {/*  */}
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
