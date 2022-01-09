import { Chat, Share, ThumbDown, ThumbUp } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React, { forwardRef } from "react";
import PostOption from "./PostOption";
import "./Post.css";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { deepOrange } from "@mui/material/colors";

const Post = forwardRef(({ user, desc, message, photoUrl }, ref) => {
  return (
    <div ref={ref} className="post">
      <div className="post__info">
        <Avatar sx={{ bgcolor: deepOrange[500] }} src={user.imgUrl}>
          {user.name}
        </Avatar>
        <div className="post__userInfo">
          <h2>{user.name}</h2>
          <p>{desc}</p>
        </div>
      </div>
      <img
        src={photoUrl}
        alt=""
        style={{ display: !photoUrl && "none" }}
        className="post__img"
      />
      <p>{message}</p>
      <div className="post__review">
        <PostOption Icon={ThumbUp} title="Like" />
        <PostOption Icon={ThumbDown} title="Dislike" />
        <PostOption Icon={Chat} title="Comment" />
        <PostOption Icon={Share} title="Share" />
      </div>
    </div>
  );
});

export default Post;
