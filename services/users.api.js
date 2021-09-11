import {setUsers} from "../redux/actions/ActionsCreator";

const URL = 'https://jsonplaceholder.typicode.com/';

const getUsers = () => async (dispatch) => {
    dispatch(setUsers(await (await fetch(URL + 'users')).json()))
}
export {getUsers};
