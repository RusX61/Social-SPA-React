const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs:[
        {id: 1, name:'Pasha QAsha',message:'hey Yo'},
        {id: 2, name:'Nasty Mordasty',message:'hiylo'},
        {id: 3, name:'John Psyna',message:'wtsup?'},
        {id: 4, name:'Vasya Vasilek',message:'kuku'},
        {id: 5, name:'Petya Petushok',message:'spoki noki'},
        {id: 6, name:'Ivan Ivanch',message:'zdarov?'},

    ],

    messages:[
        {id:1, message:'empty'},
        {id:2, message:'qwe'},
        {id:3, message:'zxcv'},
    ],

    newMessageBody:'',
}

const messagesReducer = (state = initialState, action) => {
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