import s from './Posts.module.css'
import Post from "./Post";

const Posts = (props) => {
let postsElements = props.postData
    .map(p=><Post
        message={p.message}
        likesCount={p.likesCount}
        repostCount={p.repostCount}
        date={p.date}/>)

    return(
        <div className={s.posts}>
            {postsElements}
        </div>
    );
}

export default Posts;