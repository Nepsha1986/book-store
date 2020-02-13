const updateShoppingCart = (state, action) => {
    if (state === undefined) {
        return {
            cartItems: []
        }
    }
    switch (action.type) {
        case('ADD_BOOK_TO_CART') : {
            let bookId = action.payload;
            let book = state.booksList.books.find(item => item.id === bookId);
            let bookInCart = state.shoppingCart.cartItems.find(item => item.id === bookId);
            let bookInCartIndex = state.shoppingCart.cartItems.indexOf(bookInCart);

            if (!bookInCart) {
                const cartItem = {
                    id: book.id,
                    title: book.title,
                    count: 1,
                    total: book.price
                };
                return {
                    cartItems: [
                        ...state.shoppingCart.cartItems,
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
                    cartItems: [
                        ...state.shoppingCart.cartItems.slice(0, bookInCartIndex),
                        cartItem,
                        ...state.shoppingCart.cartItems.slice(bookInCartIndex + 1)
                    ]
                }
            }
        }
        case('REMOVE_BOOK_FROM_CART'): {
            let bookId = action.payload.id;
            let bookInCart = state.shoppingCart.cartItems.find(item => item.id === bookId);
            let book = state.booksList.books.find(item => item.id === bookId);
            let bookInCartIndex = state.shoppingCart.cartItems.indexOf(bookInCart);
            let count = action.payload.count >= bookInCart.count ? 'all' : action.payload.count;

            if (!bookInCart) {
                return {
                    ...state
                }
            } else {
                if (count === 'all') {
                    return {
                        cartItems: [
                            ...state.shoppingCart.cartItems.slice(0, bookInCartIndex),
                            ...state.shoppingCart.cartItems.slice(bookInCartIndex + 1),
                        ]
                    }
                } else {
                    const cartItem = {
                        ...bookInCart,
                        count: bookInCart.count - count,
                        total: bookInCart.total - book.price
                    };

                    return {
                        cartItems: [
                            ...state.shoppingCart.cartItems.slice(0, bookInCartIndex),
                            cartItem,
                            ...state.shoppingCart.cartItems.slice(bookInCartIndex + 1),
                        ]
                    }
                }
            }
        }
        default:
            return state.shoppingCart
    }
};

export {updateShoppingCart};
