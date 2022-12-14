import s from './Post.module.css'

const Edit = (props) => {
    return(
        <div className={s.edit}>
            <button className={s.btn}>
            <i className="bi bi-pencil" />
            </button>
        </div>
    );
}

export default Edit;