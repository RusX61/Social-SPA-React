import s from './Community.module.css'
import FollowCount from "./FollowCount/FollowCount";
import Post from "../Profile/Posts/PostItem/Post";


const  Community = (props) => {

    return(
        <div className={s.community}>
            <FollowCount followCount={props.communityPage.followCount}/>
            <div className={s.posts}>
                <Post />
            </div>
        </div>

    );
}

export default Community;