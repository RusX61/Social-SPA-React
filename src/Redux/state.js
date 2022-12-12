let rerenderEntireTree = () => {

};

let state = {

    profilePage:{

        bio:{
            name:'Pafnuty Kakadu',
            city:'Kuchuguri',
            age:20,
            info:'Front-end Devel0per'
        },

        postData:[
            {id: 1 , message: 'My first post' , likesCount:20, repostCount:2, date:'01.08.2022'},
            {id: 2 , message: 'Repost by Valera' , likesCount:80, repostCount:8,date:'02.08.2022'},
            {id: 3 , message: 'Good news' , likesCount:60, repostCount:12, date:'03.08.2022'},
            {id: 4 , message: 'Scince blog' , likesCount:111, repostCount:33, date:'04.08.2022'}
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

        names:[
            {id: 1, name:'Pasha Kasha'},
            {id: 2, name:'Nasty Mordasty'},
            {id: 3, name:'John Psyna'}
        ],

        messages:[
            {id: 1, message:'qq'},
            {id: 2, message:'hi'},
            {id: 3, message:'wtsup?'}
        ]
    },

    settingsPage:{

    }

}

export const addPost = () => {
    let newPost = {
        id: 5,
        message:state.profilePage.newPostText,
        likesCount:0,
        repostCount:0,
        date: new Date().toLocaleString()
    };
    state.profilePage.postData.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
};

export const subscribe = (observer) =>{
    rerenderEntireTree = observer;
};

export default state;