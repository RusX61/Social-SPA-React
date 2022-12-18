import s from './ProfileInfo.module.css'
const  ProfileInfo = (props) => {

    return(
        <div className={s.userInfo}>
                <div className={s.avatar}>
                    <img  src="https://ir.ozone.ru/s3/multimedia-o/c1000/6087801468.jpg" alt="avatar"/>
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