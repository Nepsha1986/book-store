const initialState = {
    books: [],
    isLoading: true,
    error: null,
    cartItems: [
        {
            id: 1,
            name: 'Some name',
            count: 2,
            total: 55
        },
        {
            id: 4,
            name: 'Some name 2',
            count: 5,
            total: 390
        }
    ],
    total: 550
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case('FETCH_BOOKS_REQUEST') :
            return {
                ...state,
                books: [],
                isLoading: true,
                error: null
            };
        case('FETCH_BOOKS_SUCCESS') :
            return {
                ...state,
                books: action.payload,
                isLoading: false,
                error: null
            };
        case('FETCH_BOOKS_FAILURE'):
            return {
                ...state,
                books: [],
                isLoading: false,
                error: action.payload
            };
        default:
            return state;
    }
};
