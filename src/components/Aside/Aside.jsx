import s from "./Aside.module.css";
import {NavLink} from "react-router-dom";

const Aside = (props) => {
    let friends = props.state.FriendsList.map( f => <li className={s.item}>{f.name}</li>)
    return (
        <aside>
            <ul>
                <li className={s.item}><NavLink to="/profile">Profile</NavLink></li>
                <li className={s.item}><NavLink to="/dialogs">Messages</NavLink></li>
                <li className={s.item}><NavLink to="#">News</NavLink></li>
                <li className={s.item}><NavLink to="#">Music</NavLink></li>
            </ul>
            <h3>Friends List</h3>
            <ul>
                {friends}
            </ul>
        </aside>
    );
}
export default Aside;