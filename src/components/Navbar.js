import { Link } from "react-router-dom";
import React from "react";

export default function Navbar(props) {
  console.log(props);

  function handleLogOut() {
    localStorage.removeItem("user-info");
    sessionStorage.removeItem("isLoggedIn");
    props.setIsLoggedIn(false);
  }

  return (
    <nav>
      <ul className="navbar">
        {!sessionStorage.getItem("isLoggedIn") && (
          <li>
            <Link to="/">
              <button className="navbar__button">Log in</button>
            </Link>
          </li>
        )}

        {sessionStorage.getItem("isLoggedIn") && (
          <li>
            <Link to="/posts">
              <button className="navbar__button">Posts</button>
            </Link>
          </li>
        )}

        {sessionStorage.getItem("isLoggedIn") && (
          <li>
            <Link to="/add-blog">
              <button>Add blog</button>
            </Link>
          </li>
        )}
        {sessionStorage.getItem("isLoggedIn") && (
          <li>
            <Link to="/">
              <button onClick={handleLogOut} className="navbar__button">
                Log out
              </button>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
