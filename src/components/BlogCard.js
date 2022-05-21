export default function BlogCard(props) {
  // let blogDetails = "/posts/" + props.apiData._id;

  return (
    <div className="Card">
      <h2>{props.apiData.title}</h2>
      <h6>Posted on: {props.apiData.createdAt}</h6>
    </div>
  );
}
