const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';

let store ={
    _state: {

        profilePage:{

            bio:{
                name:'Pafnuty Kakadu',
                city:'Kuchuguri',
                age:20,
                info:'Front-end Devel0per'
            },

            postData:[
                {id: 1 , message: 'My first post' , likesCount:20, repostCount:2, commentsCount:28, date:'01.08.2022'},
                {id: 2 , message: 'Repost by Valera' , likesCount:80, repostCount:8, commentsCount:6, date:'02.08.2022'},
                {id: 3 , message: 'Good news' , likesCount:60, repostCount:12, commentsCount:20, date:'03.08.2022'},
                {id: 4 , message: 'Scince blog' , likesCount:111, repostCount:33, commentsCount:11, date:'04.08.2022'}
            ],

            newPostText:''

        },

        communityPage:{
            followCount:{
                subscribers:48,
                subscriptions:52
            }
        },

        messagesPage:{

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

        },

        settingsPage:{

        }

    },
    _callSubscriber () {
        console.log('State changed')
    },

    getState () {
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },

    dispatch(action){

        if (action.type === ADD_POST){
            let newPost = {
                id: 5,
                message:this._state.profilePage.newPostText,
                likesCount:0,
                repostCount:0,
                date: new Date().toLocaleString()
            };
            this._state.profilePage.postData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        }
        else if (action.type === UPDATE_NEW_POST_TEXT){
                        this._state.profilePage.newPostText = action.newText;
                        this._callSubscriber(this._state);
        }
        else if (action.type === UPDATE_NEW_MESSAGE_TEXT){
            debugger
            this._state.messagesPage.newMessageBody = action.body;
            debugger
            this._callSubscriber(this._state);
        }
        else if (action.type === SEND_MESSAGE){
            let body = this._state.messagesPage.newMessageBody;

            this._state.messagesPage.newMessageBody = '';

            this._state.messagesPage.messages.push( {id:10, message: body});
            this._callSubscriber(this._state);
        }



    }

}

export const addPostActionCreator = () => ({type: 'ADD-POST'})

export const updateNewPostActionCreator = (text) =>
    ({type: 'UPDATE-NEW-POST-TEXT', newText:text})


export const sendMessageCreator = () => ({type: 'SEND_MESSAGE'})


export const updateNewMessageBodyCreator = (body) =>
    ({type: 'UPDATE_NEW_MESSAGE_TEXT', body: body})

export default store;
window.store = store;