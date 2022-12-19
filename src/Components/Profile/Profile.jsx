import s from './Profile.module.css'
import Posts from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import NewPostContainer from "./NewPost/NewPostContainer";

const  Profile = (props) => {

    let state = props.store.getState();

    return(
        <div className={s.profile}>
            <div>
                <div className={s.top}>
                    <ProfileInfo bio={state.profilePage.bio}/>

                    <NewPostContainer store={props.store}/>
                </div>
            </div>


            <Posts postData={state.profilePage.postData} bio={state.profilePage.bio}/>
        </div>

    );
}

export default Profile;