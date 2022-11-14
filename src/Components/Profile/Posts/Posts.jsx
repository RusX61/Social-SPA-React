import s from './Posts.module.css'
import Post from "./Post";
import Like from "./Like";

const Posts = () => {
    return(
        <div className={s.posts}>
            <div>
                My Posts
                <div className={s.posts}>
                    <div className={s.newPost}>
                        <textarea name="message" id="" cols="50" rows="5"></textarea>
                        <button>New Post</button>
                    </div>
                    <div>
                        <Post message='hi' likesCount="0"/>
                        <Like likesCount="101"/>
                    </div>
                    <div>
                        <Post message='what`s' likesCount="5"/>
                        <Like likesCount="120"/>
                    </div>
                    <div>
                        <Post message='up' likesCount="10"/>
                        <Like likesCount="710"/>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default Posts;