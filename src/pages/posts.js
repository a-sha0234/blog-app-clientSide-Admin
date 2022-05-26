import { react, useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";

export default function Posts(props) {
  const [isLoading, setIsLoading] = useState(true); // check to see if data is still loading

  const [apiData, setApiData] = useState([]); // store all posts

  const [isDeleted, setIsdeleted] = useState(false); // check if a post was deleted

  const [errorMessage, setErrorMessage] = useState(); // hold error message

  useEffect(() => {
    // get all posts
    fetch("https://blogapi-server.herokuapp.com/posts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: props.getToken,
      },
    }).then((result) => {
      if (!result.ok) {
        throw Error("could not retrieve blogs");
      }

      return result
        .json()
        .then((result) => {
          setApiData(result);
        })
        .catch((err) => {
          setErrorMessage(err.message);
        });
    });
  }, [isDeleted]);

  useEffect(() => {
    // check if posts is loaded
    if (apiData.length > 0) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  }, [apiData]);

  function handleDelete(event) {
    // delete posts
    fetch(
      `https://blogapi-server.herokuapp.com/posts/${event.target.className}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: props.getToken,
        },
      }
    ).then((result) => {
      if (!result.ok) {
        throw Error("could not delete post ");
      }

      return result.json().then((message) => {
        setIsdeleted((prev) => {
          return !prev;
        });
      });
    });
  }

  return (
    <div className="">
      {errorMessage && <h1>{errorMessage}</h1>}
      <h1>Welcome Admin</h1>
      {isLoading == false &&
        apiData.map((item) => {
          return (
            <div>
              <BlogCard apiData={item} />{" "}
              <button className={item._id} onClick={handleDelete}>
                delete
              </button>
            </div>
          );
        })}
    </div>
  );
}
