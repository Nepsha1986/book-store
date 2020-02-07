import React from 'react';
import BookListContainer from '../../containers/book-list-container';

let HomePage = () => {
    return (
        <div className='container py-5'>
            <div className="row">
                <div className="col-12">
                    <h2>Home Page</h2>

                    <BookListContainer />
                </div>
            </div>
        </div>
    )
};

export {HomePage}
