import s from './Post.module.css'

const Like = (props) => {
    return(
        <div className={s.like}>
            <button className={s.btn}>
                <i className="bi bi-suit-heart" />
            </button>
            <button className={s.btn}>
                {props.likesCount}
            </button>
        </div>


    );
}

export default Like;