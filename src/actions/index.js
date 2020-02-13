const booksLoaded = (books) => {
    return {
        type: 'FETCH_BOOKS_SUCCESS',
        payload: books
    }
};

const booksRequested = () => {
    return {
        type: 'FETCH_BOOKS_REQUEST'
    }
};

const booksFetchError = (error) => {
    return {
        type: 'FETCH_BOOKS_FAILURE',
        payload: error
    }
};

const fetchBooks = (bookStoreService, dispatch) => () => {
    dispatch(booksRequested());
    bookStoreService.getBooks()
        .then(books => dispatch(booksLoaded(books)))
        .catch(error => dispatch(booksFetchError(error)));
};

const addBookToCart = (id) => {
    return {
        type: 'ADD_BOOK_TO_CART',
        payload: id
    }
};

const removeBookFromCart = (id, count = 1) => {
    return {
        type: 'REMOVE_BOOK_FROM_CART',
        payload: { id, count}
    }
};

export {
    fetchBooks,
    addBookToCart,
    removeBookFromCart
}
