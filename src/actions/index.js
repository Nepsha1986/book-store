const booksLoaded = (books) => {
    return {
        type: 'BOOKS_LOADED',
        payload: books
    }
};

const booksRequested = () => {
    return {
        type: 'BOOKS_REQUESTED'
    }
};

const booksFetchError = (error) => {
    return {
        type: 'BOOKS_FETCH_ERROR',
        payload: error
    }
};

export {
    booksLoaded,
    booksRequested,
    booksFetchError
}
