import React from 'react';
import BookListContainer from '../../containers/book-list-container';
import PurchaseList from "../purchase-list/PurchaseList";

let HomePage = () => {
    return (
        <div className='container py-5'>
            <div className="row">
                <div className="col-12">
                    <h2>Home Page</h2>

                    <BookListContainer />
                    <PurchaseList />
                </div>
            </div>
        </div>
    )
};

export {HomePage}
