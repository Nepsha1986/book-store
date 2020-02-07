const initialState = {
    books: [],
    isLoading: true,
    error: null
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
