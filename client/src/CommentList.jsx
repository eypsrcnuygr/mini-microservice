import React from "react";
import axios from "axios";

const CommentList = ({ comments }) => {
  //   const [comments, setComments] = useState([]);

  //   const fetchData = async () => {
  //     const res = await axios.get(
  //       `http://localhost:4001/posts/${postId}/comments`
  //     );

  //     setComments(res.data);
  //   };

  //   useEffect(() => {
  //     fetchData();
  //   }, []);
  let content;

  const renderedComments = comments.map((comment) => {
    if (comment.status === "approved") {
      content = comment.content;
    }

    if (comment.status === "pending") {
      content = "This comment is awaiting approval!";
    }

    if (comment.status === "rejected") {
      content = "This comment has been rejected!";
    }
    return <li key={comment.id}>{content}</li>;
  });

  return (
    <div>
      <ul>{renderedComments}</ul>
    </div>
  );
};

export default CommentList;
