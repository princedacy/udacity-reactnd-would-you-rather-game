import { saveQuestion, saveQuestionAnswer } from '../utils/api'
import { assignAnswerToUser, assignQuestionToUser } from './users'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const ADD_QUESTION_ANSWER = 'ADD_QUESTION_ANSWER';

export function fetchQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

function createPoll({ authedUser, questionId, answer }) {
    return {
        type: ADD_QUESTION_ANSWER,
        authedUser,
        questionId,
        answer
    }
}

export function handleVote(vote) {
    return (dispatch) => {
        return saveQuestionAnswer(vote)
            .then(() => {
                dispatch(createPoll(vote));
                dispatch(assignAnswerToUser(vote))
            })
            .catch((e) => {
                console.log('Something went wrong!')
            })
    }
}

function createQuestion(question) {
    return {
        type: ADD_QUESTION,
        question
    }
}

export function handleQuestion({ optionOneText, optionTwoText }) {
    return (dispatch, getState) => {
        const { authedUser } = getState();
        return saveQuestion({
            optionOneText,
            optionTwoText,
            author: authedUser
        })
            .then((res) => {
                dispatch(createQuestion(res));
                const { author: authedUser, id: questionId } = res
                dispatch(assignQuestionToUser({ authedUser, questionId }))
            })
            .catch((e) => {
                console.log('Something went wrong!')
            })
    }
}