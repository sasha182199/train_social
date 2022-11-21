import s from "./Profile.module.css";
import Posts from "./Posts/Posts.jsx";
import ProfilePhoto from "./ProfilePhoto/ProfilePhoto";

const Profile = (props) => {


    return (
        <main className={s.mainContent}>
            <ProfilePhoto/>
            <Posts PostData={props.profilePage.PostData}
                   newPostText={props.profilePage.newPostText}
                   dispatch={props.dispatch}
            />
        </main>
    );
}
export default Profile;