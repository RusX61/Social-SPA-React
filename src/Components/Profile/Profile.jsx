import s from './Profile.module.css'
import Posts from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import NewPost from "./NewPost/NewPost";

const  Profile = (props) => {

    return(
        <div className={s.profile}>
            <div className={s.top}>
                <ProfileInfo bio={props.profilePage.bio}/>
                <NewPost postData={props.profilePage.postData}/>
            </div>

            <Posts postData={props.profilePage.postData} bio={props.profilePage.bio}/>
        </div>

    );
}

export default Profile;