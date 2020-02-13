import React from 'react';
import './style.css';

const BookListItem = ({book, onAddBook}) => {
    let { id, title, description, price, img} = book;

    return (
        <div className="card">
            <img className="card-img-top" src={img} alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text">${price}</p>
                <button onClick={() => { onAddBook(id) }} className="btn btn-primary">Add to cart</button>
            </div>
        </div>
    )
};

export {BookListItem};
