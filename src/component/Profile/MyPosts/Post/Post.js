import React from 'react'

import {LikeCounter, LikeCounters, PostImg, PostText, PostWrapper} from "./PostComponent";
const Post = (props) => {


    return (
        <PostWrapper >
            <PostImg alt='ava' src='https://klike.net/uploads/posts/2019-03/1551511784_4.jpg' />
            <PostText>{props.message}</PostText>
            <LikeCounters >
                <LikeCounter> Like: {props.likeCount}</LikeCounter>
            </LikeCounters>
        </PostWrapper>
    )
}

export default Post
