import React from 'react';
import {connect} from 'react-redux';
import './style.css';

const PurchaseList = ({items, total, onIncrease, onDecrease, onDelete}) => {
    console.log(items);
    return (
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
                items.map((item, index) => {
                    return (
                        <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.title}</td>
                            <td>{item.count}</td>
                            <td>{item.total}</td>
                            <td>
                                <button onClick={() => {
                                    onIncrease()
                                }} className="btn btn-outline-primary mr-2">
                                    <i className="fas fa-plus"></i>
                                </button>
                                <button onClick={() => {
                                    onDecrease()
                                }} className="btn btn-outline-warning mr-2">
                                    <i className="fas fa-minus"></i>
                                </button>
                                <button onClick={() => {
                                    onDelete()
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
                    {total}
                </td>
            </tr>
            </tbody>
        </table>
    )
};

const mapStateToProps = (state) => {
    return {
        items: state.cartItems,
        total: state.total
    }
};

const mapDispatchToProps = () => {
    return {
        onIncrease: () => {
            console.log('Increase')
        },
        onDecrease: () => {
            console.log('Decrease')
        },
        onDelete: () => {
            console.log('Delete')
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PurchaseList);
