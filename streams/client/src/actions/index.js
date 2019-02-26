import signType from "../reducers/types"
import streams from "../api/streams"

export const trySignIn = (userId) => {
        return {
            type: signType.SIGN_IN,
            payload: userId
        }
}

export const trySignOut = () => {
    return {
        type: signType.SIGN_OUT
    }
}

export const createStream = formValues => async dispatch => {
    streams.post("/streams", formValues);
}