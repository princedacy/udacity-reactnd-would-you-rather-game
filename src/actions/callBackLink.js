import { SET_CALLBACK_LINK } from "./types"
export function setCallbackLink (link) {
    return {
        type: SET_CALLBACK_LINK,
        link
    }
}