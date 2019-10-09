import React from 'react';
import style from './Profile.module.css';

const Profile = () => {
    return (
        <main className={style.content}>
            <img className={style.headImg} src="https://zdnet2.cbsistatic.com/hub/i/2019/09/05/7c148e17-3f7e-4166-b755-324799ba0c7a/821e5f436179a5f90978a04703fb06ad/atanas-malamov-tpmav6c33de-unsplash.jpg" alt="img"></img>
            <div>
                <img className={style.avatarImg} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQToA9s3Y6-r1AO4iK79QL6hpW_6mlFDevRGvbg7Y7nc_UG2coM" alt="avatar"></img>
            </div>

            <div>
                My Posts

                <div>
                    New Post
                </div>

                <div>
                    <div className={style.item}>
                        Post 1
                    </div>

                    <div className={style.item}>
                        Post2
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Profile;