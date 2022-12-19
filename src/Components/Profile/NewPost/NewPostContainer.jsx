import React from "react";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../Redux/profile-reducer";
import NewPost from "./NewPost";

const  NewPostContainer = (props) => {

    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    };

    let onPostChange = (text) => {
       let action = updateNewPostActionCreator(text);
       props.store.dispatch(action)

    }

    return(
       <NewPost updateNewPostText = {onPostChange}
                addPost = {addPost}
                newPostText = {state.profilePage.newPostText}
                postCount = {state.profilePage.postData.length}/>

    );
}

export default NewPostContainer;