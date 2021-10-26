import { SET_CALLBACK_LINK } from "../actions/types";

export default function callBackLink(state = null, action) {
    switch (action.type) {
        case SET_CALLBACK_LINK:
            return action.link;
        default:
            return state
    }
}