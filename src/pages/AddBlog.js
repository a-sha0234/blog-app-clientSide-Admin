import { react, useEffect, useState } from "react";

export default function AddBlog() {
  const [addBlogData, setAddBlogData] = useState({
    Author: "",
    title: "",
    text: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setAddBlogData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
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
        ></input>

        <label>Title</label>
        <input
          name="title"
          value={addBlogData.title}
          placeholder="title"
          onChange={handleChange}
        ></input>

        <label>Blog text</label>
        <input
          name="text"
          value={addBlogData.text}
          placeholder="text"
          onChange={handleChange}
        ></input>
        <button>Submit</button>
      </form>
    </div>
  );
}
