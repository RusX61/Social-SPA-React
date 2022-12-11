import s from "./Nav.module.css";
import {NavLink} from "react-router-dom";

const  Nav = () => {
    return(
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" className={navData=>navData.isActive ? s.active:s.item}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/subscriptions" className={navData=>navData.isActive ? s.active:s.item}>Subscriptions</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" className={navData=>navData.isActive ? s.active:s.item}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" className={navData=>navData.isActive ? s.active:s.item}>Settings</NavLink>
            </div>
        </nav>
    );
}

export default Nav;