import { createSelector } from 'reselect';

export const selectUsersReducer = state => state.users;

export const selectUsers = createSelector(
    [selectUsersReducer],
    users => users.users
);

export const selectUsersLoading = createSelector(
    [selectUsersReducer],
    users => users.usersLoading
);

export const selectUsersFetched = createSelector(
    [selectUsersReducer],
    users => users.usersFetched
);

export const selectUsersError = createSelector(
    [selectUsersReducer],
    users => users.usersError
);