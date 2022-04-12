import { Link } from "react-router-dom";
import React from "react";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <Link to="/">Log in</Link>
      </ul>
    </nav>
  );
}
