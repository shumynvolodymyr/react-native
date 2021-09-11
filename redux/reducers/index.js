import {usersReducer} from "./usersReducer";
import {combineReducers} from 'redux'
import {postsReducer} from "./postsReducer";

export const rootReducer = combineReducers({usersReducer, postsReducer})
