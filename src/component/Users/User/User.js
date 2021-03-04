import React from 'react';
import styles from './User.module.css'
import defPhoto from '../../../assets/images/51f6fb256629fc755b8870c801092942.png'
import {NavLink} from "react-router-dom";

const User = ({fullname, userPhoto, status, userId, follow, unFollow, isFollow, followingiInProgress, }) => {

    return (
        <article className={styles.container}>
            <section className={styles.content_wrapper}>
                <div className={styles.img_bottom_wraper}>
                    <div className={styles.img_wrapper}>
                        <NavLink to={'/profile/' + userId}>
                            <img className={styles.profilePhoto} src={userPhoto != null ? userPhoto : defPhoto} alt="profilePhoto"/>
                        </NavLink>
                    </div>
                    {isFollow
                        ? <button disabled={followingiInProgress.some(id => id === userId)} onClick={() => {
                           unFollow(userId)
                        }}>Unfollow</button>
                        : <button disabled={followingiInProgress.some(id => id === userId)} onClick={() => {
                            follow(userId)
                        }}>follow</button>}
                </div>
                <section className={styles.bio_wrapper}>
                    <h2>{fullname}</h2>
                    <p>{status}</p>
                </section>
                <section className={styles.location_wrapper}>
                    {/*<h3>{countryName}</h3>*/}
                    {/*<p>{cityName}</p>*/}
                </section>
            </section>
        </article>
    );

};

export default User;
