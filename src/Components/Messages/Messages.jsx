import React from "react";
import s from './Messages.module.css'
import DialogItem from "./DialogItem";

const  Messages = (props) => {

    let dialogs = props.messagesPage.dialogs.map
    (n => <DialogItem id={n.id} name={n.name} message={n.message}/>);

    return(
        <div className={s.dialogs}>
            {dialogs}
        </div>
    );
}

export default Messages;