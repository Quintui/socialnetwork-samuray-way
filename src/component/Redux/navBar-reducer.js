let initialState = {
    navigation: [
        {
            link: '/profile',
            name: 'Profile',
            id: 1
        },
        {
            link: '/dialogs',
            name: 'Message',
            id: 2
        },
        {
            link: '/users',
            name: 'Users',
            id: 3
        },
        {
            link: '/news',
            name: 'News',
            id: 4
        },
        {
            link: '/music',
            name: 'Music',
            id: 5
        },
        {
            link: '/setting',
            name: 'Setting',
            id: 6
        },

    ]
}

const navBarReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;

    }
}

export default navBarReducer