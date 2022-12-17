import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import communityReducer from "./community-reducer";
import settingsReducer from "./settings-reducer";


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
        profileReducer(this._state.profilePage, action);
        communityReducer(this._state.communityPage, action);
        messagesReducer(this._state.messagesPage, action);
        settingsReducer(this._state.settingsPage, action);

        this._callSubscriber(this._state);
    }

}






export default store;
window.store = store;