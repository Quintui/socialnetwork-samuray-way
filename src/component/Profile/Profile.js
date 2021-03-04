import React from 'react'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileWrapper} from "./ProfileComponent";

const Profile = ({profile, status, updateStatus}) => {


    return (
        <>
            <ProfileWrapper >
                <ProfileInfo profile = {profile} status = {status} updateStatus ={updateStatus}/>
               <MyPostsContainer />
            </ProfileWrapper>
        </>
    )
}

export default Profile
