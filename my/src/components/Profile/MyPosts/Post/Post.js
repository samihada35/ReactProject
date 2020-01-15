import React from "react";
import style from "./Post.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Post = ({ message, likeCount }) => {
  return (
    <div className={style.item}>
      <img
        className={`${style.avatarImg} ${style.avatarNews}`}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQToA9s3Y6-r1AO4iK79QL6hpW_6mlFDevRGvbg7Y7nc_UG2coM"
        alt="avatar"
      ></img>
      <div className={style.postNews}>{message}</div>
      <div className={`${style.likeButton}`}>
        <FontAwesomeIcon icon={faHeart} /> {likeCount}
      </div>
    </div>
  );
};

export default Post;


