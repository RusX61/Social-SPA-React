import s from './Post.module.css'

const Repost = (props) => {
    return(
        <div className={s.repost}>
            <button className={s.btn}>
                <i className="bi bi-arrow-repeat"/>
            </button>
            <button className={s.btn}>
                {props.repostCount}
            </button>
        </div>
    );
}

export default Repost;