const initialState = {
    books: [],
    isLoading: true,
    error: null,
    cartItems: []
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
        case('ADD_BOOK_TO_CART'): {
            let bookId = action.payload;
            let book = state.books.find(item => item.id === bookId);
            let bookInCart = state.cartItems.find(item => item.id === bookId);
            let bookInCartIndex = state.cartItems.indexOf(bookInCart);

            if (!bookInCart) {
                const cartItem = {
                    id: book.id,
                    title: book.title,
                    count: 1,
                    total: book.price
                };
                return {
                    ...state,
                    cartItems: [
                        ...state.cartItems,
                        cartItem
                    ]
                };
            } else {
                const cartItem = {
                    ...bookInCart,
                    count: bookInCart.count + 1,
                    total: bookInCart.total + book.price
                };

                return {
                    ...state,
                    cartItems: [
                        ...state.cartItems.slice(0, bookInCartIndex),
                        cartItem,
                        ...state.cartItems.slice(bookInCartIndex + 1)
                    ]
                }
            }
        }

        case('REMOVE_BOOK_FROM_CART'): {
            let bookId = action.payload.id;
            let bookInCart = state.cartItems.find(item => item.id === bookId);
            let book = state.books.find(item => item.id === bookId);
            let bookInCartIndex = state.cartItems.indexOf(bookInCart);
            let count = action.payload.count >= bookInCart.count ? 'all' : action.payload.count;

            if (!bookInCart) {
                return {
                    ...state
                }
            } else {
                if (count === 'all') {
                    return {
                        ...state,
                        cartItems: [
                            ...state.cartItems.slice(0, bookInCartIndex),
                            ...state.cartItems.slice(bookInCartIndex + 1),
                        ]
                    }
                } else {
                    const cartItem = {
                        ...bookInCart,
                        count: bookInCart.count - count,
                        total: bookInCart.total - book.price
                    };

                    return {
                        ...state,
                        cartItems: [
                            ...state.cartItems.slice(0, bookInCartIndex),
                            cartItem,
                            ...state.cartItems.slice(bookInCartIndex + 1),
                        ]
                    }
                }
            }
        }
        default:
            return state;
    }
};
