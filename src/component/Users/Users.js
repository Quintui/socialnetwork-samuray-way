import styled from './UserClass.module.css'
import User from "./User/User";
import React from "react";
import Pagination from "../Common/Pagination/pagination";

const Users = ({
                   users,
                   follow,
                   unFollow,
                   setSelectedPage,
                   currentPage,
                   followingiInProgress,
                   followingProgress,
                   totalCountUsers,
                   pageSize
               }) => {


    let mappedUser = users.map(user => <User fullname={user.name}
                                             userPhoto={user.photos.small}
                                             status={user.status}
                                             key={user.id}
                                             userId={user.id}
                                             isFollow={user.followed}
                                             follow={follow}
                                             unFollow={unFollow}
                                             followingiInProgress={followingiInProgress}
                                             followingProgress={followingProgress}


    />)

    return (
        <div>
            <ul className={styled.userList}>
                <Pagination setSelectedPage={setSelectedPage} currentPage={currentPage}
                            totalCountUsers={totalCountUsers} pageSize={pageSize}/>
            </ul>
            <div>
                {mappedUser}
            </div>
        </div>

    )
}


export default Users;