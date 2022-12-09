import s from './Post.module.css'

const Date = (props) => {
    return(
        <div className={s.date}>
            {props.date}
        </div>
    );
}

export default Date;