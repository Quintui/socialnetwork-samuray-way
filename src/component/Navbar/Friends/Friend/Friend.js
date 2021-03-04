import React from 'react'
import s from './Friend.module.css'
const Friend = (props) => {
   
    return (
        <>
            <div className = {s.friendWrap}>
                <img className = {s.friendImg} src = {props.img} alt = {props.alt} />
            </div>   
        </>
    )
}

export default Friend
