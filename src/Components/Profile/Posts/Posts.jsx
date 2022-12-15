import s from './Posts.module.css'
import Post from "./PostItem/Post";

const Posts = (props) => {
    let name = props.bio.name;

    let postsElements = props.postData
    .slice(0).reverse().map(p=>
        <Post
            name = {name}
            message={p.message}
            likesCount={p.likesCount}
            repostCount={p.repostCount}
            commentsCount={p.commentsCount}
            date={p.date}
        />)

    return(
        <div className={s.posts}>
            {postsElements}
        </div>
    );
}

export default Posts;