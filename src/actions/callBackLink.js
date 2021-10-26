export const SET_CALLBACK_LINK = 'SET_CALLBACK_LINK';

export function setCallbackLink (link) {
    return {
        type: SET_CALLBACK_LINK,
        link
    }
}