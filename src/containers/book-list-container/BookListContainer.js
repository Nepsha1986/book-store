import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import './style.css';
import {fetchBooks, addBookToCart} from "../../actions";
import {withBookstoreService} from '../../components/hoc';
import {compose} from "../../utils";
import {Preloader} from "../../components/preloader";
import ErrorIndicator from "../../components/error-indicator";
import {BookList} from "../../components/book-list/BookList";

let BookListContainer = (props) => {
    let {
        books,
        isLoading,
        error,
        fetchBooks,
        onAddBook
    } = props;

    useEffect(() => {
        fetchBooks();
    }, [fetchBooks]);

    if (error) return <ErrorIndicator/>;

    return (
        isLoading ? <Preloader/> : <BookList books={books} onAddBook={onAddBook}/>
    )
};

const mapStateToProps = (state) => {
    return {
        books: state.books,
        isLoading: state.isLoading,
        error: state.error
    };
};

const mapDispatchToProps = (dispatch, {bookStoreService}) => {
    return {
        fetchBooks: fetchBooks(bookStoreService, dispatch),
        onAddBook: (id) => {
            dispatch(addBookToCart(id))
        }
    }
};

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
