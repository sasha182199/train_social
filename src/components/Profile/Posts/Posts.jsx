import s from "./Posts.module.css";
import Post from "./Post/Post.jsx";
const Posts = () => {
    return (
            <div className={s.posts}>
                <h1>Posts</h1>
                <div className={s.new_post}>
                    New Post
                </div>

                <div className={s.posts_wrapper}>
                    <Post message="Default first post" likeCount="15"/>
                    <Post message="Trying to change" likeCount="25"/>

                </div>
                <button>Add Post</button>
                <button>Remove Text</button>
            </div>

    );
}
export default Posts;