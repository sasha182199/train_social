import s from "./Aside.module.css";

const Aside = () => {
    return (
        <aside>
            <ul>
                <li className={s.item}><a href="/profile">Profile</a></li>
                <li className={s.item}><a href="/dialogs">Messages</a></li>
                <li className={s.item}><a href="#">News</a></li>
                <li className={s.item}><a href="#">Music</a></li>
            </ul>
        </aside>
    );
}
export default Aside;