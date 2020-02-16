export const updateUsersList = (state, action) => {
    if (state === undefined) {
        return {
            users: [],
            loading: false,
            error: null
        }
    }

    switch (action.type) {
        case('FETCH_USERS_REQUEST'): {
            return {
                ...state.usersList,
                loading:true,
                users: []
            }
        }
        case ('USERS_FETCH_SUCCESS'): {
            return {
                loading: false,
                users: action.payload,
                error: false
            }
        }
        case ('USERS_FETCH_FAILURE'): {
            return {
                users: [],
                error: true,
                loading: false,
            }
        }
        default:
            return state.usersList
    }

};
