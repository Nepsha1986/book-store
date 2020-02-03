import React from 'react';
import {BookListItem} from "../book-list-item";
import './style.css';

let BookList = ({books}) => {
    let items = books.map(book => <div className='book-list__item'><BookListItem book={book}/></div>);

    return (
        <div className='book-list'>
            {items}
        </div>
    )
};

export {BookList}
