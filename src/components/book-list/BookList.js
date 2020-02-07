import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import './style.css';
import {booksLoaded, booksRequested, booksFetchError} from "../../actions";
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
        booksLoaded,
        bookStoreService,
        booksRequested,
        booksFetchError
    } = props;

    useEffect(() => {
        booksRequested();
        bookStoreService.getBooks().then((books) => {
            booksLoaded(books);
        }).catch((error) => {
            booksFetchError(error);
        });
    }, [booksLoaded, bookStoreService, booksRequested, booksFetchError]);

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

const mapDispatchToProps = {
    booksLoaded,
    booksRequested,
    booksFetchError
};

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookList);
