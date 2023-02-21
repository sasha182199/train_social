import s from "./Aside.module.css";
import {NavLink} from "react-router-dom";

const Aside = (props) => {
    return (
        <aside>
            <ul>
                <li className={s.item}><NavLink to="/profile">Profile</NavLink></li>
                <li className={s.item}><NavLink to="/dialogs">Messages</NavLink></li>
                <li className={s.item}><NavLink to="/users">Users</NavLink></li>
                <li className={s.item}><NavLink to="#">News</NavLink></li>
                <li className={s.item}><NavLink to="#">Music</NavLink></li>
            </ul>

        </aside>
    );
}
export default Aside;