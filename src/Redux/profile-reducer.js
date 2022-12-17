const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
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
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0,
                repostCount: 0,
                date: new Date().toLocaleString()
            };
            state.postData.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: 'ADD-POST'})

export const updateNewPostActionCreator = (text) =>
    ({type: 'UPDATE-NEW-POST-TEXT', newText:text})

export default profileReducer;