import s from "./ProfilePhoto.module.css";
import Preloader from "../../Common/Preloader/Preloader";

const ProfilePhoto = (props) => {
     console.log(props.profile)
        if(!props.profile){
            return <Preloader/>
        }

        return (

            <div className={s.profile}>
                <div className={s.logo_profile}>
                    {/*<img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FFacebook&psig=AOvVaw2bYjaRnJMIf9vaL4tLOKi5&ust=1677869921291000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCKjR1db2vf0CFQAAAAAdAAAAABAE" alt=""/>*/}
                    <img alt="test" src={props.profile.photos.large}/>
                    {/*} alt=""/>*/}
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