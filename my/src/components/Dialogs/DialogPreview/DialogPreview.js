import React from "react";
import style from "./DialogPreview.module.css";
import { NavLink } from "react-router-dom";

const DialogPreview = props => {
  let path = "/my/src/components/Dialogs/Dialogs.js/" + props.id;
  return (
    <NavLink to={path} className={style.dialogPreview}>
      <img
        className={`${style.avatarNews}`}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQToA9s3Y6-r1AO4iK79QL6hpW_6mlFDevRGvbg7Y7nc_UG2coM"
        alt="avatar"
      />
      <div className={style.name}>{props.name}</div>
      <div>{props.messagePreview}</div>
    </NavLink>
  );
};

export default DialogPreview;
