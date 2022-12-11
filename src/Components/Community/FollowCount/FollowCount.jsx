import s from './FollowCount.module.css'
import {NavLink} from "react-router-dom";


const  FollowCount = (props) => {
    let pathSubscribers = '/subscribers/' + props.id;
    let pathSubscriptions = '/subscriptions/' + props.id;

    return( <div className={s.stats}>
                <NavLink to={pathSubscribers}>
                    <div className={s.subscribers}>
                        Subscribers: {props.followCount.subscribers}
                    </div>
                </NavLink>
                <NavLink to={pathSubscriptions}>
                    <div className={s.subscriptions}>
                        Subscriptions: {props.followCount.subscriptions}
                    </div>
                </NavLink>
            </div>


    );
}

export default FollowCount;