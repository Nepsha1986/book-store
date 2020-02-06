import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import './style.css';
import {booksLoaded} from "../../actions";
import {withBookstoreService} from '../hoc';
import {BookListItem} from "../book-list-item";
import {compose} from "../../utils";

let BookList = (props) => {
    let {books, booksLoaded, bookStoreService} = props;
    let items = books.map(book => <div className='book-list__item' key={book.id}><BookListItem book={book}/></div>);

    useEffect(() => {
        booksLoaded(bookStoreService.getBooks());
    }, [booksLoaded, bookStoreService]);

    return (
        <div className='book-list'>
            {items}
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        books: state.books
    };
};

const mapDispatchToProps = {
    booksLoaded
};

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookList);
