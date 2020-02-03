import React from 'react';
import {BookList} from '../book-list';

let HomePage = () => {
    let books = [
        {
            id: 1,
            title: 'Book 1',
            description: 'Contrary to popular belief, Lorem Ipsum is not simply random text.'
        },
        {
            id: 2,
            title: 'Book 2',
            description: 'Contrary to popular belief, Lorem Ipsum is not simply random text.'
        },
        {
            id: 3,
            title: 'Book 3',
            description: 'Contrary to popular belief, Lorem Ipsum is not simply random text.'
        },
    ];
    return (
        <div>
            <h2>Home Page</h2>

            <BookList books={books}/>
        </div>
    )
};

export {HomePage}
