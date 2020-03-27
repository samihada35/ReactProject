import React from "react";
import Post from "./Post/Post.js";
import style from "./MyPosts.module.css";

const MyPosts = props => {

  let postItem = props.postData.map(post => (
    <Post message={post.message} likeCount={post.likeCount} />
  ));

  return (
    <div>
      <div className={style.myPost}>My Posts</div>

      <div>
        <div className={style.newPost}>
          <form name="comment" method="post" action="#">
            <textarea
              name="maincomment"
              className={style.textareaPost}
              maxLength="500"
            ></textarea>
            <div>
              <input type="submit" className={style.input} value="post" />
            </div>
          </form>
        </div>
      </div>

      {postItem}
    </div>
  );
};

export default MyPosts;
