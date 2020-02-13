import React from 'react';

import './style.css';
import {BookListItem} from "../book-list-item";

let BookList = ({books, onAddBook}) => {
    let items = books.map(book =>
        <div className='book-list__item col-3' key={book.id}>
            <BookListItem book={book} onAddBook={onAddBook}/>
        </div>);

    return (
        <div className='book-list row mb-5'>{items}</div>
    )
};

export {BookList};
