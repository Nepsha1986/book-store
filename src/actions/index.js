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

export {
    fetchBooks
}
