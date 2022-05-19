import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

import React from "react";

export default function Login(props) {
  const navigate = useNavigate();

  React.useEffect(() => {
    if (localStorage.getItem("user-info") && props.loggedValue == true) {
      navigate("/posts");
    }
  }, [props.loggedValue]);

  const [formData, setFormData] = React.useState({
    username: "",
    password: "",
  });

  function handleFormChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    let username = event.target.username.value;
    let password = event.target.password.value;
    let credentials = { username, password };

    fetch("http://localhost:3002/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(credentials),
    })
      .then((result) => result.json())
      .then((userInfo) => {
        localStorage.setItem("user-info", JSON.stringify(userInfo));

        props.setIsLoggedIn(true);
      });
  }

  return (
    <main>
      <Form onSubmit={handleSubmit} method="post">
        {" "}
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter username"
          name="username"
          value={formData.username}
          onChange={handleFormChange}
        />
        {/*  */}
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter password"
          name="password"
          value={formData.password}
          onChange={handleFormChange}
        />
        {/*  */}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </main>
  );
}
