import React from "react";
import style from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

let NavLinksData =[
  {link: "/my/src/components/Profile/Profile.js", name: "Profile"},
  {link: "/my/src/components/Dialogs/Dialogs.js", name: "Messages"},
  {link: "/my/src/components/News/News.j", name: "News"},
  {link: "/my/src/components/Music/Music.js", name: "Music"},
  {link: "/my/src/components/Settings/Settings.js", name: "Settings"}
];

let NavLinks = NavLinksData.map(linkUrl => (
  <div className={`${style.item} ${style.active}`}>
    <NavLink to={linkUrl.link}>{linkUrl.name}</NavLink>
  </div>
  ));

const Navbar = () => {
  return (
    <nav className={style.nav}>
      {NavLinks}
    </nav>
  );
};

export default Navbar;
