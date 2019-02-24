import signType from "../reducers/types"

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