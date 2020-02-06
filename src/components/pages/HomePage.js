import React from 'react';
import BookList from '../book-list';

let HomePage = () => {
    return (
        <div className='container py-5'>
            <div className="row">
                <div className="col-12">
                    <h2>Home Page</h2>

                    <BookList />
                </div>
            </div>
        </div>
    )
};

export {HomePage}
