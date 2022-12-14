import s from './Post.module.css'

const Delete = (props) => {
    return(
        <div className={s.delete}>
            <button className={s.btn}>
            <i className="bi bi-trash" />
            </button>
        </div>
    );
}

export default Delete;