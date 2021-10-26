// export const RECEIVE_USERS = 'RECEIVE_USERS';
// export const ADD_ANSWER_TO_USER = 'ADD_ANSWER_TO_USER';
// export const ADD_QUESTION_TO_USER = 'ADD_QUESTION_TO_USER';
import {RECEIVE_USERS, ADD_ANSWER_TO_USER, ADD_QUESTION_TO_USER} from './types'
export const fetchUsers = (users) => {
    return {
        type: RECEIVE_USERS,
        users
    }
}

export const assignAnswerToUser = ({ authedUser, qid, answer }) => {
    return {
        type: ADD_ANSWER_TO_USER,
        authedUser,
        qid,
        answer
    }
}

export const assignQuestionToUser = ({ authedUser, qid }) => {
    return {
        type: ADD_QUESTION_TO_USER,
        authedUser,
        qid
    }
}