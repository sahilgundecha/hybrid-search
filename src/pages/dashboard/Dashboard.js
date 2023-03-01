import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

const url = "https://hn.algolia.com/api/v1/search?";
const Dashboard = (e) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setLoading(true);
    if (e.target.value == "") {
      setLoading(false);
      setData([]);
      return;
    }
    setData([]);
    fetch(url + new URLSearchParams({ query: e.target.value }))
      .then((data) => data.json())
      .then((res) => {
        console.log(res);
        setLoading(false);
        setError(null);
        setData(res);
      })
      .catch((err) => {
        setLoading(false);
        setData([]);
        setError(new Error(err));
      });
  };

  const debounce = (cb, d = 300) => {
    let timer;
    return function (...args) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        cb(...args);
      }, d);
    };
  };

  const debouncedSearch = debounce(handleChange);

  const handleRedirect = (postId) => {
    navigate(`/post/${postId}`, {
      state: {
        postId,
      },
    });
  };

  return (
    <form autoComplete="off">
      <div>
        <input
          type="text"
          id="input"
          placeholder="Type here..."
          onChange={(e) => debouncedSearch(e)}
        />
      </div>
      <ul className="list">
        {data?.hits?.length > 0 &&
          data?.hits
            ?.filter((post) => post?.title)
            .map((post, ind) => (
              <li
                className="list-items"
                key={post.postID || ind}
                onClick={() => handleRedirect(post.objectID)}
              >
                {post.title}
              </li>
            ))}
        {loading && <li className="list-items">Loading...</li>}
      </ul>
    </form>
  );
};

export default Dashboard;
