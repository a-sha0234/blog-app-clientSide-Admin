import { Link } from "react-router-dom";
import React from "react";

export default function Navbar(props) {
  console.log(props);

  function handleLogOut() {
    localStorage.removeItem("user-info");
    props.setIsLoggedIn(false);
  }

  return (
    <nav>
      <ul>
        {props.loggedValue == false && (
          <li>
            <Link to="/">
              <button>Log in</button>
            </Link>
          </li>
        )}

        {props.loggedValue == true && (
          <li>
            <Link to="/">
              <button onClick={handleLogOut}>Log out</button>
            </Link>
          </li>
        )}

        {props.loggedValue == true && (
          <li>
            <Link to="/add-blog">Add blog</Link>
          </li>
        )}

        {props.loggedValue == true && (
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
