import dialogReducer, {addNewMessage} from "../../Redux/dialog-reducer";

let state = {
    messages: [
        {
            message: 'Hi, How are you doing???',
            img: 'https://cs8.pikabu.ru/post_img/2016/05/23/11/146403213819052939.jpg',
            id: 1
        },
        {
            message: "I'm react programmer",
            img: 'https://cs8.pikabu.ru/post_img/2016/05/23/11/146403213819052939.jpg',
            id: 2
        },
        {
            message: "Hello Nikita",
            img: 'https://cs8.pikabu.ru/post_img/2016/05/23/11/146403213819052939.jpg',
            id: 3
        },
    ]
}

it('message must be added ', () => {

    let action = addNewMessage('New Message')
    let testState = dialogReducer(state,action )

    expect(testState.messages.length).toBe(4)
})

it('text in message must be correct ', () => {

    let action = addNewMessage('New Message')
    let testState = dialogReducer(state,action )

    expect(testState.messages[3].message).toBe('New Message')
})

