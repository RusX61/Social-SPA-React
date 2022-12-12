import s from './NewPost.module.css'
import React from "react";

const  NewPost = (props) => {
    let postCount = props.postData.length

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
            props.updateNewPostText(text);
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