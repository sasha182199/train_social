let store = {
     _state : {
        DialogsPage : {
            DialogsData : [
                {name : "Andrey",id : 1},
                {name : "Sasha",id : 2},
                {name : "Natalia",id : 3},
                {name : "Olga",id : 4},
                {name : "Svetlana",id : 5}
            ],
            Messages : [
                {message : "Hi, it's my first App" ,id : 1},
                {message : "Looking for a job?" ,id : 2},
                {message : "Fine, waiting for u" ,id : 3},
                {message : "Got it" ,id : 4}
            ]
        },
        ProfilePage : {
            PostData : [
                {id: 3, message : "Default first post" ,likeCount : 1},
                {id: 4, message : "Trying to change" ,likeCount : 2}
            ],
            newPostText : "TEST FLUX"
        },
        Sidebar : {
            FriendsList : [
                {name : "Alex", id : 3},
                {name : "Youvelir", id : 4},
                {name : "MilRip", id : 5}
            ]
        }

    },
    getState(){
        return this._state;
    },
    _callSubscriber() {
        console.log("state has been changed");
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        // {type : ""}
        if(action.type === "ADD-POST"){
            let newPost = {
                id : 5,
                message : this._state.ProfilePage.newPostText,
                likeCount : 0
            };
            this._state.ProfilePage.PostData.push(newPost);
            this._state.ProfilePage.newPostText = "";
            this._callSubscriber(this._state);
        } else if(action.type === "UPDATE-ADD-POST-TEXT"){
            this._state.ProfilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}







export default store;
window.store = store;