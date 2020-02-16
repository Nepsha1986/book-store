import React, {useEffect} from 'react';
import {connect} from 'react-redux';

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

const mapStateToProps = ({booksList: {books, isLoading, error}}) => {
    return {books, isLoading, error};
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchBooks: () => {
            dispatch(fetchBooks())
        },
        onAddBook: (id) => {
            dispatch(addBookToCart(id))
        }
    }
};

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
