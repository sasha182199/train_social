import s from "./Aside.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

const Aside = (props) => {
    console.log(props.profile);
    return (
        <aside>
            <ul>
                <li className={s.item}><NavLink to={"/profile/2"}>Profile</NavLink></li>
                <li className={s.item}><NavLink to="/dialogs">Messages</NavLink></li>
                <li className={s.item}><NavLink to="/users">Users</NavLink></li>
                <li className={s.item}><NavLink to="/login">Login</NavLink></li>
                <li className={s.item}><NavLink to="#">News</NavLink></li>
                <li className={s.item}><NavLink to="#">Music</NavLink></li>

            </ul>

        </aside>
    );
}
export default Aside;