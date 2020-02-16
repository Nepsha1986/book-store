import {updateBookList} from "./book-list";
import {updateShoppingCart} from "./shopping-cart";
import {updateUsersList} from "./users-list";

export const reducer = (state, action) => {
    return {
        booksList: updateBookList(state, action),
        shoppingCart: updateShoppingCart(state, action),
        usersList: updateUsersList(state, action),
    }
};
