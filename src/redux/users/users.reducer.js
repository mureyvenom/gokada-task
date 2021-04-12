import {UsersActionTypes} from './users.types';

const INITIAL_STATE = {
    users: [],
    usersLoading: false,
    usersFetched: false,
    usersError: ''
}

const usersReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case UsersActionTypes.START_USERS_LOADING:
            return {
                ...state,
                usersLoading: true,
                usersFetched: false
            }
        case UsersActionTypes.END_USERS_LOADING:
            return{
                ...state,
                usersLoading: false,
                usersFetched: true
            }
        case UsersActionTypes.SET_USERS_ERROR:
            return {
                ...state,
                usersError: action.payload
            }
        case UsersActionTypes.CLEAR_USERS_ERROR:
            return {
                ...state,
                usersError: ''
            }
        case UsersActionTypes.SET_USERS:
            return {
                ...state,
                users: action.payload
            }
        case UsersActionTypes.CLEAR_USERS:
            return {
                ...state,
                users: []
            }
        default: 
            return state
    }
}

export default usersReducer;