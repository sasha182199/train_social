import s from "./Aside.module.css";

const Aside = () => {
    return (
        <aside>
            <ul>
                <li className={s.item}>Profile</li>
                <li className={s.item}>Message</li>
                <li className={s.item}>News</li>
                <li className={s.item}>Music</li>
            </ul>
        </aside>
    );
}
export default Aside;