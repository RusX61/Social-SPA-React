import s from './Post.module.css'
import Like from "./Like";
import Repost from "./Repost";
import Date from "./Date";
import Edit from "./Edit";
import Delete from "./Delete";

const Post = (props) => {

    return(
        <div className={s.item}>

            <div className={s.row}>

                <div className={s.avatar}>
                    <img src="https://ir.ozone.ru/s3/multimedia-o/c1000/6087801468.jpg"
                     alt="avatar"/>
                </div>

                <div className={s.text}> {props.message} </div>
            </div>

            <div className={s.stats}>
                <div className={s.name}>{props.name}</div>
                <Like likesCount={props.likesCount}/>
                <Repost repostCount={props.repostCount}/>
                <Date date={props.date}/>
                <Edit />
                <Delete />
            </div>
        </div>
    );
}

export default Post;