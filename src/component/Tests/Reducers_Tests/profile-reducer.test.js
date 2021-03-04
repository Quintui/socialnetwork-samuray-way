import profileReducer, {addNewPost, deletePost} from "../../Redux/profile-reducer";

let testState = {
    posts: [
        {
            message: 'My first post ',
            likeCount: 15,
            id: 1
        },
        {
            message: "Hello, I'm here ",
            likeCount: 20,
            id: 2
        },

    ],
}

it('post must be added', () => {
    let action = addNewPost('It-kamasutra')
    let testReducer = profileReducer(testState, action )

    expect(testReducer.posts.length).toBe(3)
})

it('Likes in new post must be zero ' , () => {
    let action = addNewPost('It-kamasutra')
    let testReducer = profileReducer(testState, action)

    expect(testReducer.posts[2].likeCount).toBe(0)
})

it('Message in New Post must be correct' , () => {
    let action = addNewPost('It-kamasutra')
    let testReducer = profileReducer(testState, action)

    expect(testReducer.posts[2].message).toBe('It-kamasutra')
})

it('post must be deleted' , () => {
   let action = deletePost(2)
    let testReducer = profileReducer(testState, action)

    expect(testReducer.posts.length).toBe(1)
})

it('expected message in new Post ' , () => {
    let action = deletePost(1000)
    let testReducer = profileReducer(testState, action)

    expect(testReducer.posts.length).toBe(2)
})

it(' deleting post mustn\'t have id more then max id in state' , () => {
    let action = deletePost(1000)
    let testReducer = profileReducer(testState, action)

    expect(testReducer.posts.length).toBe(2)
})




