export default function BlogCard(props) {
  console.log(props);

  let blogDetails = "/posts/" + props.apiData._id;

  return (
    <div className="Card">
      <a href={blogDetails}>
        <h2>{props.apiData.title}</h2>
        <h6>Posted on: {props.apiData.createdAt}</h6>
      </a>
    </div>
  );
}
