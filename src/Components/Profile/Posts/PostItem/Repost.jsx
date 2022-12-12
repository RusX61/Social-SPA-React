import s from './Post.module.css'

const Repost = (props) => {
    return(
        <div className={s.repost}>
            <i className="bi bi-arrow-repeat"></i> {props.repostCount}
        </div>
    );
}

export default Repost;