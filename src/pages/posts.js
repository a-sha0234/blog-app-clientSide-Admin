import { react, useEffect, useState } from "react";

export default function Posts(props) {
  useEffect(() => {
    fetch("http://localhost:3002/posts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: props.getToken,
      },
    }).then((result) => {
      return result.json().then((result) => {
        console.log(result);
      });
    });
  });

  return <div>sf</div>;
}
