import React from "react";
import s from './Sender.module.css'
import {NavLink} from "react-router-dom";

const Sender =(props) =>{
    let path = '/id#/' + props.id;
    return(
        <NavLink to={path}>
            <div className={s.sender}>
                <div className={s.avatar}>
                    <img  src="https://i.pinimg.com/736x/2e/2e/21/2e2e2125ee53807c2d77b34773f84b5c.jpg" alt="avatar"/>
                </div>
                {<div className={s.name}>{props.name}</div>}
            </div>
        </NavLink>
    )
}

export default Sender;