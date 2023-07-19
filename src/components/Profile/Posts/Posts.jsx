import React from "react";
import s from "./Posts.module.css";
import Post from "./Post/Post.jsx";
import {Field,reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";
import {Textarea} from "../../Common/FormsControls/FormControls";

let maxLength = maxLengthCreator(10);

const Posts = (props) => {

    let PostElements = props.PostData.map(p => <Post message={p.message} key={p.id} likeCount={p.likeCount}/>)


    let onAddPost = (values) => {
        props.addPost(values.newPostText)
    }


    return (
            <div className={s.posts}>
                <h1>Posts</h1>
                <ReduxPostForm onSubmit={onAddPost}/>
                <div className={s.new_post}>
                    New Post
                </div>

                <div className={s.posts_wrapper}>
                    {PostElements}


                </div>

            </div>

    );
}

const addNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"newPostText"} component={Textarea} placeholder={"Post Message"} validate={[requiredField, maxLength]}/>

            </div>
            <button>Add Post</button>
        </form>
    )
}

const ReduxPostForm = reduxForm({
    form: "ProfileAddNewPostForm"
})(addNewPostForm)

export default Posts;