import React from 'react'
import s from './Profile.module.css'
import LoadingIcon from "../../Common/LoadingIcon/LoadingIcon";
import YesIcon from '../../../assets/images/41P7w+2sv-L._SX331_BO1,204,203,200_.jpg'
import NoIcon from '../../../assets/images/no-no-no-not-today.jpg'
import {
    BioFullName,
    BioHeader,
    BioInfo,
    BioTextWrapperSection,
    LookingForAJobHeader, LookingForAJobImg,
    LookingForAJobWrapper,
    ProfileAvatarPhoto,
    ProfileBioWrap,
    ProfileHeadImg,
    ProfileHeadImgWrapper,
    WorkBioHeader,
    WorkBioSection,
    WorkBioWrapper
} from "./ProfileInfoComponent";
import ProfileStatusHook from "./ProfileStatus/ProfileStatusHook";

const ProfileInfo = ({profile, status, updateStatus}) => {

    if (!profile) {
        return <LoadingIcon/>
    }

    return (
        <>
            <ProfileHeadImgWrapper>
                <ProfileHeadImg alt='nature'
                                src='https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg'/>
            </ProfileHeadImgWrapper>

            <ProfileBioWrap>
                <ProfileAvatarPhoto src={profile.photos.small} alt='ava'/>
                <BioTextWrapperSection>
                    <BioFullName>{profile.fullName}</BioFullName>
                    <BioHeader>BIO</BioHeader>
                    <BioInfo>{profile.aboutMe}</BioInfo>
                </BioTextWrapperSection>
            </ProfileBioWrap>

            <ProfileStatusHook status = {status} updateStatus = {updateStatus} />

            <WorkBioSection className={s.workBio}>
                <WorkBioWrapper>
                    <WorkBioHeader>Ищу ли я работу ?</WorkBioHeader>
                    {profile.lookingForAJob ?
                        <LookingForAJobWrapper>
                            <LookingForAJobHeader>Да,</LookingForAJobHeader>
                            <LookingForAJobImg src={YesIcon} alt="laughing"/>
                        </LookingForAJobWrapper> :
                        <LookingForAJobWrapper>
                            <LookingForAJobHeader>Нет, мне всего хватает ;)</LookingForAJobHeader>
                            <LookingForAJobImg src={NoIcon} alt="crying"/>
                        </LookingForAJobWrapper>}
                </WorkBioWrapper>
                <p>{profile.lookingForAJobDescription}</p>
            </WorkBioSection>
        </>
    )
}

export default ProfileInfo
