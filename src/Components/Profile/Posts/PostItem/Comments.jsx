import s from './Post.module.css'

const Comments = (props) => {
    return(
        <div className={s.comments}>
            <button className={s.btn}>
                <i class="bi bi-chat-right-dots"/>
                {props.commentsCount}
            </button>
        </div>
    );
}

export default Comments;