export const booksLoaded = (books) => {
    return {
        type: 'FETCH_BOOKS_SUCCESS',
        payload: books
    }
};

export const booksRequested = () => {
    return {
        type: 'FETCH_BOOKS_REQUEST'
    }
};

export const booksFetchError = (error) => {
    return {
        type: 'FETCH_BOOKS_FAILURE',
        payload: error
    }
};

export const fetchBooks = () => {
    return {
       type: 'FETCH_BOOKS'
    }
};

export const addBookToCart = (id) => {
    return {
        type: 'ADD_BOOK_TO_CART',
        payload: id
    }
};

export const removeBookFromCart = (id, count = 1) => {
    return {
        type: 'REMOVE_BOOK_FROM_CART',
        payload: {id, count}
    }
};

export const usersRequested = () => {
    return {
        type: 'FETCH_USERS_REQUEST'
    }
};

export const usersLoaded = (users) => {
    return {
        type: 'USERS_FETCH_SUCCESS',
        payload: users
    }
};

export const usersFetchError = (error) => {
    return {
        type: 'USERS_FETCH_FAILURE',
        payload: error
    }
};

export const fetchUsers = () => {
    return {
        type: "GET_USERS"
    }
};
