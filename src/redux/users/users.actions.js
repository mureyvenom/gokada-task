import {UsersActionTypes} from './users.types';
import apiConnect from '../../api/apiConnect';

export const usersLoadingStart = () => ({
    type: UsersActionTypes.START_USERS_LOADING
});

export const usersLoadingEnd = () => ({
    type: UsersActionTypes.END_USERS_LOADING
});

export const setUsersError = errorMessage => ({
    type: UsersActionTypes.SET_USERS_ERROR,
    payload: errorMessage
});

export const clearUsersError = () => ({
    type: UsersActionTypes.CLEAR_USERS_ERROR
});

export const setUsers = users => ({
    type: UsersActionTypes.SET_USERS,
    payload: users
});

export const clearUsers = () => ({
    type: UsersActionTypes.CLEAR_USERS
});

export const setUsersAsync = () => {
    return async (dispatch) => {
        dispatch(usersLoadingStart());
        dispatch(clearUsersError());
        dispatch(clearUsers());
        
        try {
            const response = await apiConnect.get('/users');
            if(response.data.length > 0){
                dispatch(usersLoadingEnd());
                dispatch(setUsers(response.data));
            }else{
                dispatch(usersLoadingEnd());
                dispatch(setUsersError('Unable to get users'));
            }
        } catch (error) {
            console.log(error); //comment out in production to avoid performance issues
            dispatch(setUsersError('Something went wrong'));
        }
    }
}