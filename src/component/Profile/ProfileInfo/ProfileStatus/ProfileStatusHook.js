import React, {useState, useEffect} from 'react';
import {ProfileStatusInput, ProfileStatusText, ProfileStatusWrap} from "./ProfileStatusComponent";



const ProfileStatus = (props) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.state)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const ActivateEditMode = () => {
        setEditMode(true)
    }

    const DeactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const OnChangeStatus = (e) => {
        setStatus(e.target.value)
    }

    return (
        <>
            <ProfileStatusWrap>
                {
                    editMode
                        ?
                        <ProfileStatusInput onChange={OnChangeStatus}
                                            autoFocus={true}
                                            onBlur={DeactivateEditMode}
                                            value={!status ? '' : status}/>
                        :
                        <ProfileStatusText onDoubleClick={ActivateEditMode}>
                            {!props.status
                                ? 'Add Status'
                                : props.status}
                        </ProfileStatusText>
                }
            </ProfileStatusWrap>
        </>
    );

}


export default ProfileStatus;
