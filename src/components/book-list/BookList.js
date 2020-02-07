import React from 'react';

import './style.css';
import {BookListItem} from "../book-list-item";

let BookList = ({books}) => {
    let items = books.map(book =>
        <div className='book-list__item col-3' key={book.id}>
            <BookListItem book={book}/>
        </div>);

    return (
        <div className='book-list row'>{items}</div>
    )
};

export {BookList};
