import {
  Create,
  EventNote,
  HorizontalSplit,
  PhotoLibrary,
  VideoLibrary,
} from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import "./Center.css";
import PostOption from "./PostOption";
import Post from "./Post";
import { db } from "../firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import FlipMove from "react-flip-move";

const Center = () => {
  const user = useSelector(selectUser);
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState("");
  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
  }, []);
  const postSending = async (e) => {
    e.preventDefault();
    await db.collection("posts").add({
      user: user,
      desc: user.email,
      message: post,
      photoUrl: "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setPost("");
  };
  return (
    <div className="feed">
      <div className="feed__header">
        <div className="feed__postmaker">
          <Create
            sx={{ fontSize: "2rem", ml: ".7rem", color: "rgb(173, 173, 173)" }}
          />
          <form action="">
            <input
              type="text"
              className="feed__input"
              value={post}
              onChange={(e) => setPost(e.target.value)}
            />
            <input
              type="submit"
              className="feed__submit"
              value="send"
              onClick={postSending}
            />
          </form>
        </div>
        <div className="feed__options">
          <PostOption Icon={PhotoLibrary} title="Photos" color="#33F0FF" />
          <PostOption Icon={VideoLibrary} title="Videos" color="#FFB533" />
          <PostOption Icon={EventNote} title="Event" color="#B833FF" />
          <PostOption
            Icon={HorizontalSplit}
            title="Write an article"
            color="#33FF6B"
          />
        </div>
      </div>
      <hr />
      <div className="feed__post_wrapper">
        <FlipMove>
          {posts.map((post) => (
            <Post
              key={post.id}
              user={post.data.user}
              desc={post.data.desc}
              message={post.data.message}
              photoUrl={post.data.photoUrl}
            />
          ))}
        </FlipMove>
      </div>
    </div>
  );
};

export default Center;
