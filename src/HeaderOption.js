import React from "react";
import "./HeaderOption.css";
import { useSelector } from "react-redux";
import Avatar from "@mui/material/Avatar";
import { selectUser } from "./features/userSlice";
function HeaderOption({ avatar,Icon, title, onClick }) {
  const user = useSelector(selectUser);
  return (
    <div onClick={onClick} className="headerOption">
      {Icon && <Icon className="headerOption__icon"></Icon>}
      {avatar&&<Avatar className="headerOption__icon" >{user?.email[0]}</Avatar>}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
}

export default HeaderOption;
