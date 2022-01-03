import React, { useState } from "react";
import "./Navbar.css";
import logo from "./logo.png";
import {
  Home,
  MoreVert,
  Notifications,
  People,
  Search,
  Work,
} from "@mui/icons-material";
import NavbarOption from "./NavbarOption";
import { Avatar } from "@mui/material";

const Navbar = () => {
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
        <div className="navbar__right">
          <div
            className={!isDisplay ? "navbar__items" : "navbar__items active"}
          >
            <NavbarOption Icon={Home} title="Home" />
            <NavbarOption Icon={People} title="My Network" />
            <NavbarOption Icon={Work} title="Jobs" />
            <NavbarOption Icon={Notifications} title="Notifications" counter />
          </div>
          <Avatar
            src="https://userstock.io/data/wp-content/uploads/2017/09/bewakoof-com-official-208957.jpg"
            sx={{ ml: "1.5rem" }}
          />
          <MoreVert
            className="moreIcon"
            onClick={() => setIsDisplay(!isDisplay)}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
