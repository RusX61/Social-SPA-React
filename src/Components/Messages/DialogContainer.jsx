import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/messages-reducer";
import Dialog from "./Dialog";

const  DialogContainer = (props) => {

    let state = props.store.getState().messagesPage;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }

    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    return(
      <Dialog updateNewMessageBody = {onNewMessageChange}
              sendMessage = {onSendMessageClick}
              messagesPage = {state}/>
    );
}

export default DialogContainer;