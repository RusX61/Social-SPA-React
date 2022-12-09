import React from "react";
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import Sender from "./Sender/Sender";

const  Dialogs = (props) => {

    let nameElements = props.names.map(n => <Sender name={n.name} id={n.id}/>);
    let messageElements = props.messages.map(m => <Message message={ m.message} id={m.id}/>);

    return(
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
               <div>
                   {nameElements}
               </div>
                <div>
                    {messageElements}
                </div>
            </div>
        </div>
    );
}

export default Dialogs;