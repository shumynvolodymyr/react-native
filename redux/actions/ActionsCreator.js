import {GET_USERS} from "./ActionsTypes";

export const setUsers = (users) => {
    return {type: GET_USERS, payload: users}
}

