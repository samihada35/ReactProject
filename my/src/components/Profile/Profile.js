import React from "react";
import style from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts.js";
import ProfileInfo from "./ProfileInfo/ProfileInfo.js";

const Profile = () => {
  return (
    <main className={style.main}>
      <ProfileInfo />

      <div className={style.line}></div>

      <MyPosts />
    </main>
  );
};

export default Profile;
