import React, { useEffect, useState } from "react";
import "./post.css";
import { useLocation } from "react-router-dom";
import Comments from "../../components/comments/Comments";

const PostDetails = () => {
  const [post, setPost] = useState([]);
  const location = useLocation();

  const fetchPost = () => {
    const postId = location.state.postId;
    fetch(`https://hn.algolia.com/api/v1/items/${postId}`)
      .then((data) => data.json())
      .then((res) => {
        console.log(res);
        setPost(res);
      });
  };
  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <div className="post__wrapper">
      <Comments post={post} />
    </div>
  );
};

export default PostDetails;
