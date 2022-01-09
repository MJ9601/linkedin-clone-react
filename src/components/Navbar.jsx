import React, { useState } from "react";
import "./Navbar.css";
import logo from "./logo.png";
import {
  Home,
  HowToReg,
  Login,
  Logout,
  MoreVert,
  Notifications,
  People,
  Search,
  SignpostOutlined,
  Work,
} from "@mui/icons-material";
import NavbarOption from "./NavbarOption";
import { Avatar, Icon } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { LOGOUT, selectUser } from "../features/userSlice";
import { loginPage, registerPage } from "../features/loginSlice";
import { auth } from "../firebase";
import { deepOrange } from "@mui/material/colors";

const Navbar = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [isDisplay, setIsDisplay] = useState(false);
  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="navbar__left">
          <img src={logo} alt="" className="navbar__logo" />
          <div className="navbar__inputWrapper">
            <Search sx={{ fontSize: "3.2rem", color: "#777", mx: "auto" }} />
            <input type="text" className="navbar__input" placeholder="Search" />
          </div>
        </div>
        {user ? (
          <div className="navbar__right">
            <div
              className={!isDisplay ? "navbar__items" : "navbar__items active"}
            >
              <NavbarOption Icon={Home} title="Home" />
              <NavbarOption Icon={People} title="My Network" />
              <NavbarOption Icon={Work} title="Jobs" />
              <NavbarOption
                Icon={Notifications}
                title="Notifications"
                counter
              />
            </div>
            <Avatar
              src={user.imgUrl}
              sx={{ mx: "1.5rem", bgcolor: deepOrange[500] }}
            >
              {user.name[0]}
            </Avatar>
            <Logout
              sx={{
                color: "rgb(190, 190, 190)",
                fontSize: "2.5rem",
                cursor: "pointer",
                transition: "all .4s ease",
                ":hover": { color: "rgb(0, 0, 0)" },
              }}
              onClick={() => {
                dispatch(LOGOUT());
                auth.signOut();
                dispatch(loginPage());
              }}
            />
            <MoreVert
              className="moreIcon"
              onClick={() => setIsDisplay(!isDisplay)}
            />
          </div>
        ) : (
          <div className="navbar__right">
            <HowToReg
              sx={{
                color: "rgb(190, 190, 190)",
                fontSize: "2.5rem",
                cursor: "pointer",
                transition: "all .4s ease",
                mx: "2rem",
                ":hover": { color: "rgb(0, 0, 0)" },
              }}
              onClick={() => dispatch(registerPage())}
            />
            <Login
              sx={{
                color: "rgb(190, 190, 190)",
                fontSize: "2.5rem",
                cursor: "pointer",
                transition: "all .4s ease",
                ":hover": { color: "rgb(0, 0, 0)" },
              }}
              onClick={() => dispatch(loginPage())}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
