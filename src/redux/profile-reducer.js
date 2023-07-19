import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
    PostData : [
        {id: 3, message : "Default first post" ,likeCount : 1},
        {id: 4, message : "Trying to change" ,likeCount : 2}
    ],
    profile: null,
    status: ""
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
            id : 7,
            message : action.newPostText,
            likeCount : 0
        };
            return {
                ...state,
                PostData: [...state.PostData, newPost],
                newPostText : ""
            };
        }

        case SET_USER_PROFILE : {
            return {...state, profile : action.profile}
        }
        case SET_STATUS : {
            return {...state, status : action.status}
        }
        default: {
            return state;
        }
    }




}
export const addPostActionCreator = (newPostText) => ({type : ADD_POST, newPostText})

export const setUserProfile = (profile) => ({type : SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type : SET_STATUS, status})
export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId)
        .then(response => {
            console.log(response.data);
            dispatch(setUserProfile(response.data));
        });
}
export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            console.log(response.data);
            dispatch(setStatus(response.data));
        });
}
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if(response.data.resultCode === 0){
                dispatch(setStatus(response.data));
            }

        });
}




export default profileReducer;