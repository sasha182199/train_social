const Profile = () => {
    return (
        <main className="mainContent">
            <div className="profile">
                <div className="logo_profile">
                    <img src="https://img.freepik.com/premium-photo/young-handsome-man-with-beard-over-isolated-keeping-the-arms-crossed-in-frontal-position_1368-132662.jpg?w=2000" alt=""/>
                </div>
                <div className="profile_info">
                    <ul>
                        <li>Name</li>
                        <li>Age</li>
                        <li>Sex</li>
                    </ul>
                </div>
            </div>
            <div className="posts">
                Posts
                <div className="new_post">
                    New Post
                </div>
                <div className="published">
                    Published
                </div>
            </div>
        </main>
    );
}
export default Profile;