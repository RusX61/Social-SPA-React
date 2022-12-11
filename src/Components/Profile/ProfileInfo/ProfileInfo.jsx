import s from './ProfileInfo.module.css'

const  ProfileInfo = (props) => {

    return(
        <div className={s.userInfo}>
                <div className={s.avatar}>
                    <img  src="https://i.pinimg.com/736x/2e/2e/21/2e2e2125ee53807c2d77b34773f84b5c.jpg" alt="avatar"/>
                </div>
                <div className={s.bio}>
                    <div><h2>{props.bio.name}</h2></div>
                    <div>City: {props.bio.city}</div>
                    <div>{props.bio.age} years old</div>
                    <div>{props.bio.info}</div>
                </div>
        </div>
    );
}

export default ProfileInfo;