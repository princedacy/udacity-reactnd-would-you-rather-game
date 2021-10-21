import {RECEIVE_QUESTIONS, ADD_QUESTION, ADD_QUESTION_ANSWER, ADD_QUESTION_TO_USER} from './types'

import { saveQuestion, saveQuestionAnswer } from '../utils/api'
import { assignAnswerToUser, assignQuestionToUser } from './users'

export const fetchQuestions = (questions) => {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

const createPoll = ({authedUser, questionId, answer}) => {
    return {
        type: ADD_QUESTION_ANSWER,
        authedUser,
        questionId,
        answer
    }
} 

export const handleVote = (vote) => {
    return (dispatch) => {
        return saveQuestionAnswer(vote)
        .then(()=>{
            dispatch(createPoll(vote));
            dispatch(assignAnswerToUser(vote))
        })
        .catch((e)=>{
            console.log('Something went wrong!')
        })
    }
}

const createQuestion = (question) => {
    return {
        type: ADD_QUESTION,
        question
    }
}

export const handleQuestion = ({optionOneText, optionTwoText}) => {
    return (dispatch, getState) => {
        const {authedUser} = getState();
        return saveQuestion({
            optionOneText,
            optionTwoText,
            author: authedUser
        })
        .then((res) => {
            dispatch(createQuestion(res));
            const {author: authedUser, id: questionId} = res
            dispatch(assignQuestionToUser({authedUser, questionId}))
        })
        .catch((e)=> {
            console.log('Something went wrong!')
        })
    }
}