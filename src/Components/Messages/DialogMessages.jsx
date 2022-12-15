import React from "react";
import s from './Messages.module.css'
import DialogItem from "./DialogItem";

const  DialogMessages = (props) => {

    return(
        <div>
            {props.message}
        </div>
    );
}

export default DialogMessages;