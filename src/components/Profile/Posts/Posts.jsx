import s from "./Posts.module.css";
import Post from "./Post/Post.jsx";
const Posts = () => {
    return (
            <div className={s.posts}>
                <h1>Posts</h1>
                <div className={s.new_post}>
                    New Post
                </div>
                <button>Add Post</button>
                <button>Remove Text</button>
                <div className={s.posts_wrapper}>
                    <Post message="Default first post"/>
                    <Post message="Trying to change"/>

                </div>
            </div>

    );
}
export default Posts;