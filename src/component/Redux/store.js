import profileReducer from "./profile-reducer";
import dialogReducer from  './dialog-reducer'

export let store = {

    _state: {
        dialogPage: {
            messages: [
                {
                    message: 'Hi, How are you doing???',
                    img: 'https://cs8.pikabu.ru/post_img/2016/05/23/11/146403213819052939.jpg'
                },
                {
                    message: "I'm react programmer",
                    img: 'https://cs8.pikabu.ru/post_img/2016/05/23/11/146403213819052939.jpg'
                },
                {
                    message: "Hello Nikita",
                    img: 'https://cs8.pikabu.ru/post_img/2016/05/23/11/146403213819052939.jpg'
                },
            ],

            dialogs: [
                {
                    name: 'Kristian',
                    id: '1',
                    img: 'https://cs8.pikabu.ru/post_img/2016/05/23/11/146403213819052939.jpg'
                },
                {
                    name: 'Tema',
                    id: '2',
                    img: 'https://steamuserimages-a.akamaihd.net/ugc/921428922390606987/2C883A46ECD723CD92FCA1719FF706AE09286B71/'
                },
                {
                    name: 'Artem',
                    id: '3',
                    img: 'https://pristor.ru/wp-content/uploads/2017/05/%D0%9A%D1%80%D1%83%D1%82%D1%8B%D0%B5-%D0%B8-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%BD%D1%8B%D0%B5-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D0%BD%D0%B0-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D1%83-%D0%B2-%D0%A1%D1%82%D0%B8%D0%BC-%D1%81%D0%BA%D0%B0%D1%87%D0%B0%D1%82%D1%8C-%D0%B1%D0%B5%D1%81%D0%BF%D0%BB%D0%B0%D1%82%D0%BD%D0%BE-10.jpg'

                },
                {
                    name: 'Nikita',
                    id: '4',
                    img: 'https://pristor.ru/wp-content/uploads/2017/05/%D0%9A%D1%80%D1%83%D1%82%D1%8B%D0%B5-%D0%B8-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%BD%D1%8B%D0%B5-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D0%BD%D0%B0-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D1%83-%D0%B2-%D0%A1%D1%82%D0%B8%D0%BC-%D1%81%D0%BA%D0%B0%D1%87%D0%B0%D1%82%D1%8C-%D0%B1%D0%B5%D1%81%D0%BF%D0%BB%D0%B0%D1%82%D0%BD%D0%BE-20.jpg'
                },
            ],

            newPostMessage: 'New Message'
        },

        profilePage: {
            posts: [
                {
                    message: 'My first post ',
                    likeCount: '15',
                },
                {
                    message: "Hello, I'm here ",
                    likeCount: '20'
                },

            ],
            newPostText: 'New Post'

        }
    },

    _callSubscriber() {

        console.log('changed')
    },

    getState() {
        return this._state;
    },


    dispatch(action) {
       this._state.profilePage = profileReducer(this._state.profilePage, action)
       this._state.dialogPage =dialogReducer(this._state.dialogPage, action)
        this._callSubscriber(this._state);

    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
}




window.store = store;



