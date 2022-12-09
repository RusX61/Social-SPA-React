import s from './NewPost.module.css'

const  NewPost = () => {
    return(
        <div className={s.newPost}>
            <h3>My Posts</h3>
            <div className="form-group">
                            <textarea
                                type="text"
                                rows='3'
                                className="form-control"
                                tabIndex="1"
                                placeholder="Write your post">
                            </textarea>
                <div className="d-grid gap-2">
                    <button type="submit"
                            name="submit"
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