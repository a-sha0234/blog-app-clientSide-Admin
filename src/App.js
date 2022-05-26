import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState } from "react";

import Navbar from "./components/Navbar";
import Posts from "./pages/posts";

import Login from "./pages/Login";
import AddBlog from "./pages/AddBlog";
import "../src/scss/main.scss";

export default function App() {
  let getToken = localStorage.getItem("user-info"); //store token

  const [isLoggedIn, setIsLoggedIn] = React.useState(false); // track if logged in or not

  return (
    <BrowserRouter>
      <div className="App">
        {" "}
        <Navbar setIsLoggedIn={setIsLoggedIn} loggedValue={isLoggedIn} />
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <Login setIsLoggedIn={setIsLoggedIn} loggedValue={isLoggedIn} />
          }
        />
        <Route path="/posts" element={<Posts getToken={getToken} />} />
        <Route path="/add-blog" element={<AddBlog getToken={getToken} />} />
      </Routes>
    </BrowserRouter>
  );
}
