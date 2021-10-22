import { SET_AUTHED_USER, LOGOUT_AUTHED_USER } from "./types";

export const setAuthedUser = (id) => {
    return {
        type: SET_AUTHED_USER,
        id
    }
}

export const logoutAuthedUser = () => {
    return {
        type: LOGOUT_AUTHED_USER
    }
}