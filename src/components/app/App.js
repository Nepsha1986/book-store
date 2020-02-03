import React from 'react';

function App({bookStoreService}) {
    console.log(bookStoreService.getBooks());
    return (
        <div className="App">
            Book store
        </div>
    );
}

export default App;
