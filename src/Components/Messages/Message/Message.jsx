import React from "react";
import s from './Message.module.css'
import {NavLink} from "react-router-dom";

const Message =(props) =>{
    let path = '/dialog/' + props.id;
    return(
        <NavLink to={path}>
            <div className={s.message}>
                {props.message}
            </div>
        </NavLink>
    )
}

export default Message;