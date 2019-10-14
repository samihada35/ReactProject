import React from 'react';
import style from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.js';

const Profile = () => {
    return (
        <main className={style.content}>
            <div className={style.headDivImg}>
                <img className={style.headImg} src="http://glowingbluecore.com/wordpress/wp-content/uploads/gbc-css-img-fill-demo-wide-picture.jpg" alt="img"></img>
            </div>
            
            <div className={style.profileTop}>
                <img className={style.avatarImg} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQToA9s3Y6-r1AO4iK79QL6hpW_6mlFDevRGvbg7Y7nc_UG2coM" alt="avatar"></img>
                <div className={style.name}>Alex Clare</div>
                <div className={style.dateOfBirth}>14.12.1974</div>
                <div className={style.city}>NY</div>
                <div className={style.education}>NY state universcity, PhD of psychology</div>
                <div className={style.site}>www.JratGovno.com</div>
            </div>

            <MyPosts />
            
        </main>
    );
}

export default Profile;