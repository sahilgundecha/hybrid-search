import React, { useEffect, useState } from "react";
import "./post.css";
import { useParams } from "react-router-dom";
import Comments from "../../components/comments/Comments";

const PostDetails = () => {
  const [post, setPost] = useState([]);
  const { id } = useParams();

  const fetchPost = () => {
    fetch(`https://hn.algolia.com/api/v1/items/${id}`)
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
      {Object?.keys(post)?.length != 0 ? (
        <Comments post={post} />
      ) : (
        "Loading Post Please Wait..."
      )}
    </div>
  );
};

export default PostDetails;
