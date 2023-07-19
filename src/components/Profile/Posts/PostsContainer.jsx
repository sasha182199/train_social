import {addPostActionCreator} from "../../../redux/profile-reducer.js";
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
        addPost : (newPostText) => {
            dispatch(addPostActionCreator(newPostText));
        }
    }
}

const PostsContainer = connect(mapStateToProps,mapDispatchToProps)(Posts);

export default PostsContainer;