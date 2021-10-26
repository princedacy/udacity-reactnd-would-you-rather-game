import { saveQuestion, saveQuestionAnswer } from '../utils/api'
import { assignAnswerToUser, assignQuestionToUser } from './users'
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const ADD_QUESTION_ANSWER = 'ADD_QUESTION_ANSWER';

export const fetchQuestions = (questions) => {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

const createPoll = ({ authedUser, qid, answer }) => {
    return {
        type: ADD_QUESTION_ANSWER,
        authedUser,
        qid,
        answer
    }
}

export const handleVote = (vote) => {
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

const createQuestion = (question) => {
    return {
        type: ADD_QUESTION,
        question
    }
}

export const handleQuestion = ({ optionOneText, optionTwoText }) => {
    return (dispatch, getState) => {
        const { authedUser } = getState();
        return saveQuestion({
            optionOneText,
            optionTwoText,
            author: authedUser
        })
            .then((res) => {
                dispatch(createQuestion(res));
                const { author: authedUser, id: qid } = res
                dispatch(assignQuestionToUser({ authedUser, qid }))
            })
            .catch((e) => {
                console.log('Something went wrong!')
            })
    }
}