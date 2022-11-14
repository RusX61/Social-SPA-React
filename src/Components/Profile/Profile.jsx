import s from './Profile.module.css'
import Posts from "./Posts/Posts";

const  Profile = () => {
    return(
        <div className={s.profile}>
        <div className={s.userInfo}>
                <div className={s.avatar}>
                    <img  src="https://i.pinimg.com/736x/2e/2e/21/2e2e2125ee53807c2d77b34773f84b5c.jpg" alt="avatar"/>
                </div>
                <div className={s.bio}>
                    <div><h1>Valera Ryabov</h1></div>
                    <div>City:Kuchuguri</div>
                    <div>20 years old</div>
                    <div>Front-end Devel0per</div>
                </div>
        </div>
            <Posts />
        </div>

    );
}

export default Profile;