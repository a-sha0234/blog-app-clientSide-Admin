import { react, useEffect, useState } from "react";

export default function Posts(props) {
  let token = localStorage.getItem("user-info");

  useEffect(() => {
    fetch("http://localhost:3002/posts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    }).then((result) => {
      return result.json().then((result) => {
        console.log(result);
      });
    });
  });

  return <div>sf</div>;
}
