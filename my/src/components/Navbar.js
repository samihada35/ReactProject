import React from 'react';
import style from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={style.nav}>
            
            <div className={`${style.item} ${style.active}`}>
                <a href="#">Profile</a>
            </div>

            <div className={`${style.item} ${style.active}`}>
                <a href="#">Messages</a>
            </div>

            <div className={`${style.item} ${style.active}`}>
                <a href="#">News</a>
            </div>

            <div className={`${style.item} ${style.active}`}>
                <a href="#">Music</a>
            </div>

            <div className={`${style.item} ${style.active}`}>
                <a href="#">Settings</a>
            </div>

        </nav>
    );
}

export default Navbar;