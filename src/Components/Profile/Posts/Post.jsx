import s from './Post.module.css'

const Post = (props) => {
    return(
        <div className={s.item}>
                <img src="https://i.pinimg.com/736x/2e/2e/21/2e2e2125ee53807c2d77b34773f84b5c.jpg" alt="avatar"/>
                {props.message}
        </div>
    );
}

export default Post;