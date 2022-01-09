import React from "react";
import "./PostOption.css";

const PostOption = ({ Icon, title, color }) => {
  const _color = "#aaa9a9";
  return (
    <div className="postop">
      <Icon sx={{ color: !color ? _color : color, fontSize: "2rem" }} />
      <span className="postop__title">{title}</span>
    </div>
  );
};

export default PostOption;
