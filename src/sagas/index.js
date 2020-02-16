import { call, put, takeLatest, all } from 'redux-saga/effects';
import * as actions from '../actions';
import BookStoreService from '../services/bookstore-service';

let gookStoreService = new BookStoreService();

function* getUsers() {
    yield put(actions.usersRequested());
    try {
        const users = yield call(() => gookStoreService.getAllUsers());
        yield put(actions.usersLoaded(users));
    } catch (error) {
        put(actions.usersFetchError(error))
    }
}

function* fetchBooks() {
    yield put(actions.booksRequested());
    try {
        let books = yield call(() => gookStoreService.getBooks());
        yield put(actions.booksLoaded(books))
    } catch (error) {
        yield put(actions.booksFetchError(error))
    }
}

function* actionWatcher() {
    yield takeLatest('FETCH_BOOKS', fetchBooks);
    yield takeLatest('GET_USERS', getUsers)
}
export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}
