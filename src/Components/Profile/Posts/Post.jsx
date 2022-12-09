import s from './Post.module.css'
import Like from "./Like";
import Repost from "./Repost";
import Date from "./Date";

const Post = (props) => {

    return(
        <div className={s.item}>
            <div className={s.row}>
                <div className={s.avatar}>
                    <img src="https://i.pinimg.com/736x/2e/2e/21/2e2e2125ee53807c2d77b34773f84b5c.jpg" alt="avatar"/>
                </div>
                <div className={s.text}>
                    {props.message}
            </div>

            </div>
            <div className={s.stats} >
                <Like likesCount={props.likesCount}/>
                <Repost repostCount={props.repostCount}/>
                <Date date={props.date}/>
            </div>
        </div>
    );
}

export default Post;