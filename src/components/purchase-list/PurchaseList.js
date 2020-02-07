import React from 'react';
import './style.css';

const PurchaseList = () => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>
                        #
                    </th>
                    <th>
                        Item
                    </th>
                    <th>
                        Count
                    </th>
                    <th>
                        Price
                    </th>
                    <th>
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>
                        1
                    </th>
                    <th>
                        Some item
                    </th>
                    <th>
                        2
                    </th>
                    <th>
                        $34
                    </th>
                    <th>
                        <button className="btn btn-outline-primary mr-2">
                            <i className="fas fa-plus"></i>
                        </button>
                        <button className="btn btn-outline-warning mr-2">
                            <i className="fas fa-minus"></i>
                        </button>
                        <button className="btn btn-outline-danger">
                            <i className="fas fa-trash-alt"></i>
                        </button>
                    </th>
                </tr>
            </tbody>
        </table>
    )
};

export {PurchaseList};
