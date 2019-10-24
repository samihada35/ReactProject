import React from 'react';
import Post from './Post/Post.js'
import style from './MyPosts.module.css';

const posts =[{id:1, profileImg:'', likesCount:3, text:'Hi'}, {id:2, profileImg:'', likesAmaunt:16, text:'My name is Alex'}];

const MyPosts = () => {
    return (
        <div>
            
            <div className={style.myPost}>
                My Posts
            </div>
            
            <div>
                <div className={style.newPost}>
                    <form name='comment' method='post' action='#'>

                        <textarea name='maincomment' className={style.textareaPost} maxLength='500'></textarea>
                        <div>
                            <input type='submit' className={style.input} value='post'/>
                        </div>
                    </form>
                </div>

            </div>
{}
            <Post message='Hi' likeCount='26' />
            <Post message='My name is Alex' likeCount='16' />
        </div>
    );
}

export default MyPosts;