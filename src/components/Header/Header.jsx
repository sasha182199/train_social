import s from "./Header.module.css";
import logoMain from "../../images/facebook.webp"
import {NavLink} from "react-router-dom";
const Header = (props) => {
    return (
        <header className={s.header}>
            <div className={s.wrapper}>
                <img src={logoMain} alt="logo"/>
                <div className={s.login_block}>
                    {props.isAuth ? <div className={s.authName}>{props.login}</div> : <NavLink to="/login">Login</NavLink>}

                </div>
            </div>
        </header>
    );
}
export default Header;