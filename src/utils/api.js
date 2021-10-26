import { _getUsers, _getQuestions, _saveQuestion, _saveQuestionAnswer } from "./_DATA";

/**
 * @description This function fetches users and questions 
 * @returns returns users and questions
 */
export const getInitialData = async () => {
    const [users, questions] = await Promise.all([_getUsers(), _getQuestions()])
    
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