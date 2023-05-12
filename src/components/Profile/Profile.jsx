import s from "./Profile.module.css";
import ProfilePhoto from "./ProfilePhoto/ProfilePhoto";
import PostsContainer from "./Posts/PostsContainer";

const Profile = (props) => {


    return (
        <main className={s.mainContent}>

            <ProfilePhoto profile={props.profile}/>
            <PostsContainer/>
        </main>
    );
}
export default Profile;