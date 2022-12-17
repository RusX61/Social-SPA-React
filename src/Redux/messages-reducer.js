const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';

const messagesReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 10, message: body});
            return state;
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: 'SEND_MESSAGE'})

export const updateNewMessageBodyCreator = (body) =>
    ({type: 'UPDATE_NEW_MESSAGE_TEXT', body: body})

export default messagesReducer;