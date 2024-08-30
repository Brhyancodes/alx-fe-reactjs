import { useParams } from "react-router-dom";

function BlogPost() {
  const { id } = useParams();

  return (
    <>
      <p>Blog Post ID: {id}</p>
    </>
  );
}

export default BlogPost;