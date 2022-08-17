import s from "./Profile.module.css";
import Posts from "./Posts/Posts.jsx";

const Profile = () => {
    return (
        <main className={s.mainContent}>
            <div className={s.profile}>
                <div className={s.logo_profile}>
                    <img src="https://img.freepik.com/premium-photo/young-handsome-man-with-beard-over-isolated-keeping-the-arms-crossed-in-frontal-position_1368-132662.jpg?w=2000" alt=""/>
                </div>
                <div className="profile_info">
                    <ul>
                        <li className={`${s.item} ${s.active}`}>Name</li>
                        <li className={s.item}>Age</li>
                        <li className={s.item}>Sex</li>
                    </ul>
                </div>
            </div>
            <Posts/>
        </main>
    );
}
export default Profile;