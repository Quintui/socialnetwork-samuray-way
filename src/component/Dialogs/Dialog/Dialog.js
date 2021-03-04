import React from 'react'
import {
    DialogItem,
    DialogImg,
    NavLink
} from './DialogComponent'

const Dialog = ({img,id,name}) => {
    
    return (
        <>
            <DialogItem>
                <DialogImg  src = {img} />
                <NavLink activeClassName = 'active'  to = {`/dialogs/${id}`}> {name} </NavLink>
            </DialogItem>
        </>
    )
}

export default Dialog
