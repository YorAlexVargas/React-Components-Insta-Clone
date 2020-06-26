// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments(data)
const [data] = useState(props);

  return (
    <div>
      {/* .map(derp) through the comments data and return the Comment component */}
      {data.comments.map ( bob => (
        <Comment comment={bob} key={bob.username}/>
      
      
      ) ) }
      <CommentInput />
    </div>
  );
};

export default CommentSection;
