import React from "react";
import "./Header.css";
import {useDispatch} from 'react-redux'
import SearchIcon from "@mui/icons-material/Search";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import {auth} from './firebase'
import { signOut } from "firebase/auth";
import {logout,selectUser} from './features/userSlice'
import {useSelector} from  'react-redux'

function Header() {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)
  const logoutApp=()=>{
    dispatch(logout())
    signOut(auth)
  }
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"
          alt=""
        ></img>
        <div className="header__search">
          <SearchIcon></SearchIcon>
          <input placeholder="Search" type="text"></input>
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home"></HeaderOption>
        <HeaderOption
          Icon={SupervisorAccountIcon}
          title="My Network"
        ></HeaderOption>
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs"></HeaderOption>
        <HeaderOption Icon={ChatIcon} title="Messaging"></HeaderOption>
        <HeaderOption
          Icon={NotificationsIcon}
          title="Notifications"
        ></HeaderOption>
        <HeaderOption
          avatar={true}
          title="Me"
          onClick={logoutApp}
        ></HeaderOption>
      </div>
    </div>
  );
}

export default Header;
