import React from "react";
import s from "./Posts.module.css";
import Post from "./Post/Post.jsx";
const Posts = (props) => {

    let PostElements = props.PostData.map(p => <Post message={p.message} likeCount={p.likeCount}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        // let text = newPostElement.current.value;
        props.dispatch({type : "ADD-POST"});
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        // console.log(text);
        props.dispatch({type : "UPDATE-ADD-POST-TEXT", newText : text});
    }

    return (
            <div className={s.posts}>
                <h1>Posts</h1>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <button onClick={addPost}>Add Post</button>
                <div className={s.new_post}>
                    New Post
                </div>

                <div className={s.posts_wrapper}>
                    {PostElements}


                </div>

            </div>

    );
}
export default Posts;