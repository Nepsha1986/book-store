import React from 'react';
import './style.css';

const BookListItem = ({book}) => {
    let { title, description } = book;

    return (
        <div className={'book-list-item'}>
            <span>{title}</span>
            <span>{description}</span>
        </div>
    )
};

export {BookListItem};
