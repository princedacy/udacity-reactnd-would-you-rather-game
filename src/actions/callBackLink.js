import {SET_CALLBACK_LINK} from './types'

export const setCallbackLink = (link) => {
    return {
        type: SET_CALLBACK_LINK,
        link
    }
}