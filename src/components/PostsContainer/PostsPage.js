//Complete the necessary code in this file
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
import dummyData from "../../../src/dummy-data";

const PostsPage = () => {
  // set up state for your data
  const [data] = useState(dummyData);


  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
      {data.map(dan => {
        return <Post post={dan} />
        
      })}
    </div>
  );
};

export default PostsPage;
