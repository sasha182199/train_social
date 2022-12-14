import s from "./Header.module.css";

const Header = () => {
    return (
        <header className={s.header}>
            <div className="wrapper">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Facebook_F_icon.svg/640px-Facebook_F_icon.svg.png" alt="logo"/>
            </div>
        </header>
    );
}
export default Header;