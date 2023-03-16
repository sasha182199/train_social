import {combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import userReducer from "./users-reducer";

let reducers = combineReducers({
    ProfilePage : profileReducer,
    DialogsPage : dialogsReducer,
    Sidebar : sidebarReducer,
    UsersPage: userReducer
});

let store = createStore(reducers);
window.store = store;
export default store;