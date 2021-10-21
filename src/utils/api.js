import { _getUsers, _getQuestions, _saveQuestion, _saveQuestionAnswer } from "./_DATA";

/**
 * @description This function fetches users and questions 
 * @returns {users, questions}
 */
export const fetchUsersandQuestions = () => {
    const [users, questions] = Promise.all([_getUsers, _getQuestions])

    return {
        users,
        questions
    }
}

/**
 * @description This function saves the question
 * @param {*} data 
 * @returns question
 */
export const saveQuestion = (data) => {
    return _saveQuestion(data)
}
/**
 * @description This function adds answers to a question
 * @param {*} data 
 * @returns question's answers
 */
export const saveQuestionAnswer = (data) => {
    return _saveQuestionAnswer(data)
}