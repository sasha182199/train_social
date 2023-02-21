import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer.js";
import Posts from "./Posts";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        PostData : state.ProfilePage.PostData,
        newPostText : state.ProfilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText : (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        },
        addPost : (body) => {
            dispatch(addPostActionCreator());
        }
    }
}

const PostsContainer = connect(mapStateToProps,mapDispatchToProps)(Posts);

export default PostsContainer;