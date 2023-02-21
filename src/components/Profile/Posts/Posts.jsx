import React from "react";
import s from "./Posts.module.css";
import Post from "./Post/Post.jsx";



const Posts = (props) => {

    let PostElements = props.PostData.map(p => <Post message={p.message} key={p.id} likeCount={p.likeCount}/>)

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        // console.log(text);
        props.updateNewPostText(text);
    }

    return (
            <div className={s.posts}>
                <h1>Posts</h1>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <button onClick={onAddPost}>Add Post</button>
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