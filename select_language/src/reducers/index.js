import {combineReducers} from "redux"

const selectLanguageReducer =(state = {}, action ) => {
    console.log("selectLanguageReducer", action);
    if(action.type === "LANGUAGE_SELECTION"){
        return action.payload;
    }

    return state;
}



export default combineReducers({
    language_text: selectLanguageReducer
})