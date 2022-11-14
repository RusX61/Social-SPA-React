import s from './Messages.module.css'
import {NavLink} from "react-router-dom";

const  Messages = () => {
    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={`${s.dialog} + ${s.active}`}>
                    <NavLink to="/Messages/1">Valera</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/Messages/2">Pasha</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/Messages/3">Kabashka</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/Messages/4">Petya</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/Messages/5">Sanchous</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>hi</div>
                <div className={s.message}>wtf</div>
                <div className={s.message}>4people</div>
                <div className={s.message}>hello</div>
                <div className={s.message}>what's Up</div>
            </div>
        </div>
    );
}

export default Messages;