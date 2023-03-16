const ADD_POST = "ADD-POST";
const UPDATE_ADD_POST_TEXT = "UPDATE-ADD-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
    PostData : [
        {id: 3, message : "Default first post" ,likeCount : 1},
        {id: 4, message : "Trying to change" ,likeCount : 2}
    ],
    newPostText : "TEST FLUX",
    profile: null
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
            id : 7,
            message : state.newPostText,
            likeCount : 0
        };
            return {
                ...state,
                PostData: [...state.PostData, newPost],
                newPostText : ""
            };
        }
        case UPDATE_ADD_POST_TEXT : {
            return  {
                ...state,
                newPostText: action.newText
            };

        }
        case SET_USER_PROFILE : {
            return {...state, profile : action.profile}
        }
        default: {
            return state;
        }
    }




}
export const addPostActionCreator = () => ({type : ADD_POST})

export const setUserProfile = (profile) => ({type : SET_USER_PROFILE, profile})

export const updateNewPostTextActionCreator = (text) => {
    return {
        type : UPDATE_ADD_POST_TEXT,
        newText : text
    }
}


export default profileReducer;