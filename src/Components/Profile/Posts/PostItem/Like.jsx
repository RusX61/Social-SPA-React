import s from './Post.module.css'

const Like = (props) => {
    return(
        <div className={s.like}>
            <i className="bi bi-suit-heart" /> {props.likesCount}
        </div>
    );
}

export default Like;