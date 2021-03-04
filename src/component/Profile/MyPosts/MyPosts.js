import React from 'react'
import Post from "./Post/Post";
import {
    MyPostsButton,
    MyPostsHeader,
    MyPostsWrapper,
    AddPostForm,
    MyPostsInput,
    MyPostWrapper
} from "./MyPostsComponent";
import {Field, Form} from "react-final-form";
import {composeValidators, maxLength, required} from "../../Common/RequiresDirectory/Requires";


const MyPosts = ({addNewPost, posts}) => {

    const AlreadyMappedPosts = posts.posts.map(post => <Post key={post.id} message={post.message}
                                                                  likeCount={post.likeCount}/>)

    const forAddPost = (postData) => {
        addNewPost(postData.addPost);
    }

    return (
        <>
            <MyPostsWrapper>
                <MyPostsHeader>My Posts</MyPostsHeader>
                <Form onSubmit={forAddPost}
                      render={({handleSubmit}) => (
                          <AddPostForm onSubmit={handleSubmit}>
                              <Field validate={composeValidators(required, maxLength(50))} name={'addPost'}>
                                  {({meta, input}) =>
                                      <>
                                          <MyPostWrapper>
                                              <MyPostsInput {...input} placeholder='What are you thinking about'/>
                                          </MyPostWrapper>
                                          <MyPostWrapper>
                                              {meta.error && meta.touched && <span>{meta.error}</span>}
                                          </MyPostWrapper>
                                      </>
                                  }
                              </Field>
                              <MyPostsButton>Click for add</MyPostsButton>
                          </AddPostForm>
                      )}/>
            </MyPostsWrapper>
            {AlreadyMappedPosts}
        </>
    )
}

export default MyPosts
