import {combineReducers} from "redux"
import streamyType from "./types"
import { reducer as formReducer } from 'redux-form'
import streamReducer from "./streamReducer"

const INITIAL_STATE = {
    isSignedIn: null,
    userId: null
}

const authReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case streamyType.SIGN_IN:
            return {...state, isSignedIn: true, userId: action.payload};
        case streamyType.SIGN_OUT:
            return {...state, isSignedIn: false, userId: null};
        default:
            return state;
    }
}

export default combineReducers(
    {
        form: formReducer,
        auth_state: authReducer,
        streams: streamReducer
    }
)