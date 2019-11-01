import React from "react";
import style from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={style.nav}>
      <div className={`${style.item} ${style.active}`}>
        <NavLink to="/my/src/components/Profile/Profile.js">Profile</NavLink>
      </div>

      <div className={`${style.item} ${style.active}`}>
        <NavLink to="/my/src/components/Dialogs/Dialogs.js">Messages</NavLink>
      </div>

      <div className={`${style.item} ${style.active}`}>
        <NavLink to="/my/src/components/News/News.js">News</NavLink>
      </div>

      <div className={`${style.item} ${style.active}`}>
        <NavLink to="/my/src/components/Music/Music.js">Music</NavLink>
      </div>

      <div className={`${style.item} ${style.active}`}>
        <NavLink to="/my/src/components/Settings/Settings.js">Settings</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
