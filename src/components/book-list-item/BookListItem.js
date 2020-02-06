import React from 'react';
import './style.css';

const BookListItem = ({book}) => {
    let {title, description, price, img} = book;

    return (
        <div className="card">
            <img className="card-img-top" src={img} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text">${price}</p>
                <a href="#" className="btn btn-primary">Buy</a>
            </div>
        </div>
    )
};

export {BookListItem};
