import React from 'react'
import Friend from './Friend/Friend'
import s from './FriendList.module.css'
const FriendsList = () => {
    

    const mappedActiveFriend = activeFriends.map(activeFriend => <Friend img = {activeFriend.img} alt = {activeFriend.name}/>)
    return (
        <div >
            <h4>Active Friends</h4>
            <div className = {s.friendsImgWrapper}>
               {mappedActiveFriend}
            </div>
        </div>
    )
}

export default FriendsList
