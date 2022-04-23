import { Link } from "react-router-dom";
import React from "react";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          {" "}
          <Link to="/">Log in</Link>
        </li>

        <li>
          <Link to="/">
            <button>Log out</button>
          </Link>{" "}
        </li>
      </ul>
    </nav>
  );
}
