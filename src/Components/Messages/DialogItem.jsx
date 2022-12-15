import React from "react";
import s from './Messages.module.css'
import {NavLink} from "react-router-dom";


const  DialogItem = (props) => {

    let path = '/dialog/' + props.id;
    return(
        <NavLink to={path}>
                <div className={s.dialogItem}>
                    <div className={s.avatar}>
                        <img src="https://i.pinimg.com/736x/2e/2e/21/2e2e2125ee53807c2d77b34773f84b5c.jpg" alt="avatar"/>
                    </div>
                    <div className={s.text}>
                       <div className={s.name}>
                           {props.name}
                       </div>
                        <div className={s.message}>
                            {props.message}
                        </div>
                    </div>
                </div>
        </NavLink>
    );
}

export default DialogItem;