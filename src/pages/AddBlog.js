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

    fetch("http://localhost:3002/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: props.getToken,
      },

      body: JSON.stringify(addBlogData),
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Author</label>
        <input
          name="Author"
          value={addBlogData.Author}
          placeholder="Author"
          onChange={handleChange}
          type="text"
        ></input>

        <label>Title</label>
        <input
          name="title"
          value={addBlogData.title}
          placeholder="title"
          onChange={handleChange}
          type="text"
        ></input>

        <label>Blog text</label>
        <input
          name="blogtext"
          value={addBlogData.text}
          placeholder="text"
          onChange={handleChange}
          type="text"
        ></input>
        <button>Submit</button>
      </form>
    </div>
  );
}
