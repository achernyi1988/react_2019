import types from "./types"
import _ from "lodash"

const streamReducer = (state = {}, action) => {

    switch (action.type) {
        case types.FETCH_STREAM:
        case types.CREATE_STREAM:
        case types.EDIT_STREAM:
            return {...state, [action.payload.id]: action.payload}

        case types.DELETE_STREAM:
            return _.omit(state, action.payload)

        case types.FETCH_STREAMS: //all list
            return {...state, ..._.mapKeys(action.payload, "id")}
        default:
            return state;
    }
}

export default streamReducer;