import {combineReducers} from "redux"
import signType from "./types"

const INITIAL_STATE = {
    isSignedIn: null,
    userId: null
}

const authReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case signType.SIGN_IN:
            return {...state, isSignedIn: true, userId: action.payload};
        case signType.SIGN_OUT:
            return {...state, isSignedIn: false, userId: null};
        default:
            return state;
    }
}

export default combineReducers(
    {
        auth_state: authReducer
    }
)