import React from 'react'
import {
    MessageItemWrapper,
    MessageItem,
    MessageImg,
    MessageText
} from './MessageComponent'


const Message = ({message,img}) => {

    return (

        <MessageItemWrapper>
            <MessageItem >
                <MessageImg src={img} />
                <MessageText >
                    {message}
                </MessageText>
            </MessageItem>
        </MessageItemWrapper>
    )
}

export default Message
