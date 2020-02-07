import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import './style.css';
import {fetchBooks} from "../../actions";
import {withBookstoreService} from '../hoc';
import {BookListItem} from "../book-list-item";
import {compose} from "../../utils";
import {Preloader} from "../preloader";
import ErrorIndicator from "../error-indicator";

let BookList = (props) => {
    let {
        books,
        isLoading,
        error,
        fetchBooks
    } = props;

    useEffect(() => {
        fetchBooks();
    }, [fetchBooks]);

    let items = books.map(book =>
        <div className='book-list__item col-3' key={book.id}>
            <BookListItem book={book}/>
        </div>);

    if(error) return <ErrorIndicator/>;

    return (
        isLoading ? <Preloader/> : <div className='book-list row'>{items}</div>
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
        fetchBooks: fetchBooks(bookStoreService, dispatch)
    }
};

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookList);
