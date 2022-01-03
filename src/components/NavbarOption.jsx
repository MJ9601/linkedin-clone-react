import { Badge } from "@mui/material";
import React from "react";
import "./NavbarOption.css";

const NavbarOption = ({ Icon, title, counter }) => {
  return (
    <div className="navOp">
      {counter && Icon && (
        <Badge badgeContent={4} color="error" max={9}>
          <Icon sx={{ fontSize: "2.2rem" }} />
        </Badge>
      )}
      {Icon && !counter && <Icon sx={{ fontSize: "2.2rem" }} />}
      <h4 className="navOp__title">{title}</h4>
    </div>
  );
};

export default NavbarOption;
