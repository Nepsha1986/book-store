import React from 'react';
import {PurchaseList} from "../purchase-list";

let CartPage = () => {
    return (
        <div className='container py-5'>
            <div className="row">
                <div className="col-12">
                    <h2 className="mb-5">Cart Page</h2>

                    <PurchaseList/>
                </div>
            </div>
        </div>
    )
};

export {CartPage};
