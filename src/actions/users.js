import { RECEIVE_USERS, ADD_ANSWER_TO_USER, ADD_QUESTION_TO_USER } from "./types"

export const fetchUsers = (users) => {
    return {
        type: RECEIVE_USERS,
        users
    }
}

export const assignAnswerToUser = ({ authedUser, questionId, answer }) => {
    return {
        type: ADD_ANSWER_TO_USER,
        authedUser,
        questionId,
        answer
    }
}

export const assignQuestionToUser = ({ authedUser, questionId }) => {
    return {
        type: ADD_QUESTION_TO_USER,
        authedUser,
        questionId
    }
}