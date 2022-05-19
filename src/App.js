import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";

import Navbar from "./components/Navbar";
import Posts from "./pages/posts";

import Login from "./pages/Login";
import AddBlog from "./pages/AddBlog";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

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
        <Route path="/posts" element={<Posts />} />
        <Route path="/add-blog" element={<AddBlog />} />
      </Routes>
    </BrowserRouter>
  );
}
