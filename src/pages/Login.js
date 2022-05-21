import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

import React, { useState } from "react";

export default function Login(props) {
  const [errorMessage, setErrorMessage] = useState();

  const navigate = useNavigate();

  React.useEffect(() => {
    // if logged in, this should navigate you to the home page
    if (
      localStorage.getItem("user-info") &&
      sessionStorage.getItem("isLoggedIn")
    ) {
      navigate("/posts");
    }
  }, [props.loggedValue]);

  const [formData, setFormData] = React.useState({
    username: "",
    password: "",
  });

  function handleFormChange(event) {
    // track changes from each keystroke
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
      .then((result) => {
        if (!result.ok) {
          throw Error("could not fetch authentication data ");
        }
        return result.json();
      })
      .then((userInfo) => {
        localStorage.setItem("user-info", JSON.stringify(userInfo));
        sessionStorage.setItem("isLoggedIn", "true");
        props.setIsLoggedIn(true);
      })
      .catch((err) => {
        setErrorMessage(err.message);
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
          required
        />
        {/*  */}
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter password"
          name="password"
          value={formData.password}
          onChange={handleFormChange}
          required
        />
        {/*  */}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      {errorMessage && <div className="errorMessage">{errorMessage}</div>}
    </main>
  );
}
