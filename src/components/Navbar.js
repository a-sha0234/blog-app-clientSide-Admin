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
      <ul>
        {!sessionStorage.getItem("isLoggedIn") && (
          <li>
            <Link to="/">
              <button>Log in</button>
            </Link>
          </li>
        )}

        {sessionStorage.getItem("isLoggedIn") && (
          <li>
            <Link to="/">
              <button onClick={handleLogOut}>Log out</button>
            </Link>
          </li>
        )}

        {sessionStorage.getItem("isLoggedIn") && (
          <li>
            <Link to="/add-blog">Add blog</Link>
          </li>
        )}

        {sessionStorage.getItem("isLoggedIn") && (
          <li>
            <Link to="/posts">
              <button>Posts</button>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
