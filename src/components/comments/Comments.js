import React from "react";
import "./Comments.css";

const Comments = ({ post }) => {
  return (
    <>
    <div className="card">
        <div className="title">
          <p className="post__title">Title: {post?.title || "No Title"}</p>
        </div>
        <div className="points">
          <p className="post__points">Points: {post?.points || "No Points"}</p>
        </div>
      </div>

      <div className="child">
        {post?.children?.map((child)=><Comments post={child}/>)}
      </div>
      </>
  );
};

export default Comments;
