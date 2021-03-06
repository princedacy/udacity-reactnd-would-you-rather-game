import { combineReducers } from "redux";
import users from "./users";
import questions from "./questions";
import authedUser from "./authedUser";
import link from './callBackLink';

export default combineReducers({
    users,
    questions,
    authedUser,
    link
})