import React from "react";
import s from './Messages.module.css'
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/state";
import DialogMessages from "./DialogMessages";

const  Dialog = (props) => {

    let state = props.store.getState().messagesPage;

    let messages = state.messages.map
    (n => <DialogMessages message={n.message}/>);

    let newMessageBody =  state.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    return(
        <div className={s.dialog}>
            <div className={s.sender}>
                <div className={s.avatar}><img  src="https://i.pinimg.com/736x/2e/2e/21/2e2e2125ee53807c2d77b34773f84b5c.jpg" alt="avatar"/></div>
                <div className={s.name}>vasy</div>
            </div>
            <div >{messages}</div>
            <div className={s.input}>
                <div className="form-group">
                <textarea
                    value={newMessageBody}
                    onChange={onNewMessageChange}
                    type="text"
                    rows='2'
                    className="form-control"
                    tabIndex="1"
                    placeholder="Write your message" />
                    <div className="d-grid gap-2">
                        <button onClick={onSendMessageClick}
                                type="button"
                                name="sendMessage"
                                className="btn btn-outline-success btn-lg btn-block"
                                tabIndex="2">
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialog;