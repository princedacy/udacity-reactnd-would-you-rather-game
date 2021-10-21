import { getApiData } from "../utils/api";
import {fetchUsers} from './users'
import {fetchQuestions} from './questions'

export const handleApiData = () => {
    return (dispatch) => {
        return getApiData().then(({users, questions}) => {
            dispatch(fetchUsers(users));
            dispatch(fetchQuestions(questions));
        })
    }
}