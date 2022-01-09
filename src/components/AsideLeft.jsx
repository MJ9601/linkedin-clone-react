import { Avatar } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { height } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import "./AsideLeft.css";

const AsideLeft = () => {
  const user = useSelector(selectUser);
  const generalImgUrl =
    "https://media.istockphoto.com/photos/freedom-chains-that-transform-into-birds-charge-concept-picture-id1322104312?b=1&k=20&m=1322104312&s=170667a&w=0&h=VQyPkFkMKmo0e4ixjhiOLjiRs_ZiyKR_4SAsagQQdkk=";
  const view = (title, views) => (
    <p className="left__viewer">
      <span className="left__viewTitle">{title}</span>
      <span className="left__views">{views}</span>
    </p>
  );
  const recentComp = (topic) => <p className="left__recent_topic"># {topic}</p>;
  return (
    <div className="asideleft">
      <div className="asideleft__info">
        <img
          src={user.imgUrl ? user.imgUrl : generalImgUrl}
          alt=""
          className="left__img"
        />
        <div className="left__userInfo">
          <Avatar
            src={user.imgUrl}
            sx={{ mx: "auto", bgcolor: deepOrange[500] }}
          >
            {user.name[0]}
          </Avatar>
          <h2 className="left__username">{user.name}</h2>
          <p className="left__email">{user.email}</p>
        </div>
        <hr />
        <div>
          {view("Who viewed you", 2400)}
          {view("Views on post", 2400)}
        </div>
      </div>
      <div className="left__recent">
        <h1 className="left__recent_head">Recent</h1>
        <div className="left__topics">
          {recentComp("reactJs")}
          {recentComp("nodeJs")}
          {recentComp("nextJs")}
        </div>
      </div>
    </div>
  );
};

export default AsideLeft;
