import s from './Post.module.css'

const Delete = (props) => {
    return(
        <div className={s.delete}>
            <i className="bi bi-trash" />
        </div>
    );
}

export default Delete;