import s from './Post.module.css'

const Like = (props) => {
    return(
        <div className={s.like}>
            Likes: {props.likesCount}
        </div>
    );
}

export default Like;