const initialState = {
    books: [],
    isLoading: true,
    error: null
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case('BOOKS_REQUESTED') :
            return {
                ...state,
                books: [],
                isLoading: true,
                error: null
            };
        case('BOOKS_LOADED') :
            return {
                ...state,
                books: action.payload,
                isLoading: false,
                error: null
            };
        case('BOOKS_FETCH_ERROR'):
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
