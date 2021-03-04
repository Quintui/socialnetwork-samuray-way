const APP_MESSAGE_DIALOG = 'samurai-way/diolog/APP_MESSAGE_DIALOG'


let initialState = {

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
    ],

    dialogs: [
        {
            name: 'Kristian',
            id: 1,
            img: 'https://cs8.pikabu.ru/post_img/2016/05/23/11/146403213819052939.jpg'
        },
        {
            name: 'Tema',
            id: 2,
            img: 'https://steamuserimages-a.akamaihd.net/ugc/921428922390606987/2C883A46ECD723CD92FCA1719FF706AE09286B71/'
        },
        {
            name: 'Artem',
            id: 3,
            img: 'https://pristor.ru/wp-content/uploads/2017/05/%D0%9A%D1%80%D1%83%D1%82%D1%8B%D0%B5-%D0%B8-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%BD%D1%8B%D0%B5-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D0%BD%D0%B0-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D1%83-%D0%B2-%D0%A1%D1%82%D0%B8%D0%BC-%D1%81%D0%BA%D0%B0%D1%87%D0%B0%D1%82%D1%8C-%D0%B1%D0%B5%D1%81%D0%BF%D0%BB%D0%B0%D1%82%D0%BD%D0%BE-10.jpg'

        },
        {
            name: 'Nikita',
            id: 4,
            img: 'https://pristor.ru/wp-content/uploads/2017/05/%D0%9A%D1%80%D1%83%D1%82%D1%8B%D0%B5-%D0%B8-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%BD%D1%8B%D0%B5-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D0%BD%D0%B0-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D1%83-%D0%B2-%D0%A1%D1%82%D0%B8%D0%BC-%D1%81%D0%BA%D0%B0%D1%87%D0%B0%D1%82%D1%8C-%D0%B1%D0%B5%D1%81%D0%BF%D0%BB%D0%B0%D1%82%D0%BD%D0%BE-20.jpg'
        },
    ],


};


const dialogReducer = (state = initialState, action) => {
    switch (action.type) {

        case APP_MESSAGE_DIALOG:
            let newMessage = {
                message: action.newPostMessage,
                img: 'https://cs8.pikabu.ru/post_img/2016/05/23/11/146403213819052939.jpg',
                id: Date.now()
            }
            return {
                ...state,
                messages: [...state.messages, newMessage],

            };

        default:
            return state;

    }
}
export const addNewMessage = (newPostMessage) => {
    return ({type: APP_MESSAGE_DIALOG , newPostMessage})
}


export default dialogReducer