import s from "./ProfilePhoto.module.css";
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfilePhoto = (props) => {
     console.log(props.profile)
        if(!props.profile){
            return <Preloader/>
        }

        return (

            <div className={s.profile}>
                <div className={s.logo_profile}>
                    <img alt="test" src={props.profile.photos.large}/>
                    <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
                </div>
                <div className="profile_info">
                    <ul>
                        <li className={`${s.item} ${s.active}`}>Name</li>
                        <li className={s.item}>Age</li>
                        <li className={s.item}>Sex</li>
                    </ul>
                </div>
            </div>

        );


}
export default ProfilePhoto;