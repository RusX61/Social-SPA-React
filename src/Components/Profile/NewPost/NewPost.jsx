import s from './NewPost.module.css'
import React from "react";
import {addPostActionCreator} from "../../../Redux/state";
import {updateNewPostActionCreator} from "../../../Redux/state";

const  NewPost = (props) => {
    let postCount = props.postData.length

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        debugger
        let action = updateNewPostActionCreator(text);
        props.dispatch(action);
    }

    return(
        <div className={s.newPost}>
            <h3>My Posts ({postCount})</h3>
            <div className="form-group">
                <textarea
                    onChange={onPostChange}
                    ref={newPostElement}
                    value={props.newPostText}
                    type="text"
                    rows='2'
                    className="form-control"
                    tabIndex="1"
                    placeholder="Write your post" />
                <div className="d-grid gap-2">
                    <button type="button"
                            name="newPost"
                            onClick={addPost}
                            className="btn btn-outline-success btn-lg btn-block"
                            tabIndex="2">
                        Post
                    </button>
                </div>
            </div>
        </div>
    );
}

export default NewPost;