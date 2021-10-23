const RECEIVE_USERS = 'RECEIVE_USERS';
const ADD_ANSWER_TO_USER = 'ADD_ANSWER_TO_USER';
const ADD_QUESTION_TO_USER = 'ADD_QUESTION_TO_USER';

export function fetchUsers(users) {
    return {
        type: RECEIVE_USERS,
        users
    }
}

export function assignAnswerToUser({ authedUser, questionId, answer }) {
    return {
        type: ADD_ANSWER_TO_USER,
        authedUser,
        questionId,
        answer
    }
}

export function assignQuestionToUser({ authedUser, questionId }) {
    return {
        type: ADD_QUESTION_TO_USER,
        authedUser,
        questionId
    }
}