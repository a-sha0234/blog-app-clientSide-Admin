import React, { react, useEffect, useState } from "react";

export default function AddBlog(props) {
  const [addBlogData, setAddBlogData] = useState({
    Author: "",
    title: "",
    blogtext: "",
  });

  function handleChange(event) {
    // function to change values with every keystroke
    const { name, value } = event.target;
    setAddBlogData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    // submission causes creates a new blog item in database
    event.preventDefault();
    console.log(JSON.stringify(addBlogData));

    fetch("https://blogapi-server.herokuapp.com/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: props.getToken,
      },

      body: JSON.stringify(addBlogData),
    }).catch((err) => {
      console.log(err);
    });
  }

  return (
    <div className="formcontainer">
      <form onSubmit={handleSubmit} className="form">
        <input
          name="Author"
          value={addBlogData.Author}
          placeholder="Author"
          onChange={handleChange}
          type="text"
          required
        ></input>

        <input
          name="title"
          value={addBlogData.title}
          placeholder="title"
          onChange={handleChange}
          type="text"
          required
        ></input>

        <textarea
          name="blogtext"
          value={addBlogData.text}
          placeholder="text"
          onChange={handleChange}
          type="text"
          required
        ></textarea>
        <button>Submit</button>
      </form>
    </div>
  );
}
