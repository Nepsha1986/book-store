import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { BrowserRouter as Router} from 'react-router-dom';

import App from './components/app';
import store from './store';
import ErrorBoundary from "./components/error-boundary/ErrorBoundary";
import BookstoreService from "./services/bookstore-service";
import {BookstoreServiceProvider} from "./components/bookstore-service-context";
import {Header} from "./components/header";

const bookStoreService = new BookstoreService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundary>
            <BookstoreServiceProvider value={bookStoreService}>
                <Router>
                    <Header/>
                    <App/>
                </Router>
            </BookstoreServiceProvider>
        </ErrorBoundary>
    </Provider>
    ,
    document.getElementById('root')
);
