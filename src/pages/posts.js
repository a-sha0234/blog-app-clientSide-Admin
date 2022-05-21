import { react, useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";

export default function Posts(props) {
  const [isLoading, setIsLoading] = useState(true);

  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3002/posts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: props.getToken,
      },
    }).then((result) => {
      return result.json().then((result) => {
        setApiData(result);
      });
    });
  }, []);

  useEffect(() => {
    if (apiData.length > 0) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  }, [apiData]);

  return (
    <div className="">
      {isLoading == false &&
        apiData.map((item) => {
          return <BlogCard apiData={item} />;
        })}
    </div>
  );
}
