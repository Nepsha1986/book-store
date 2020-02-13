import React from 'react';
import {connect} from 'react-redux';
import './style.css';

import {removeBookFromCart, addBookToCart} from '../../actions';

const getTotal = (items) => items.reduce((acc, cur) => acc + cur.total, 0);

const PurchaseList = ({items, addBookToCart, removeBookFromCart}) => {
    return (
        items.length !== 0 ?
            <table className="table">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Item</th>
                    <th>Count</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    items.map(({id, title, count, total}, index) => {
                        return (
                            <tr key={id}>
                                <td>{index + 1}</td>
                                <td>{title}</td>
                                <td>{count}</td>
                                <td>{total}</td>
                                <td>
                                    <button onClick={() => {
                                        addBookToCart(id)
                                    }} className="btn btn-outline-primary mr-2">
                                        <i className="fas fa-plus"></i>
                                    </button>
                                    <button
                                        onClick={() => {
                                            removeBookFromCart(id)
                                        }}
                                        className="btn btn-outline-warning mr-2">
                                        <i className="fas fa-minus"></i>
                                    </button>
                                    <button onClick={() => {
                                        removeBookFromCart(id, 'all')
                                    }} className="btn btn-outline-danger">
                                        <i className="fas fa-trash-alt"></i>
                                    </button>
                                </td>
                            </tr>
                        )
                    })
                }

                <tr>
                    <td colSpan={4}>
                        Total
                    </td>
                    <td>
                        {getTotal(items)}
                    </td>
                </tr>
                </tbody>
            </table> :
            <h2>Your Cart is empty.</h2>
    )
};

const mapStateToProps = ({shoppingCart: {cartItems}}) => {
    return {
        items: cartItems,
    }
};

const mapDispatchToProps = {
    addBookToCart,
    removeBookFromCart
};

export default connect(mapStateToProps, mapDispatchToProps)(PurchaseList);
