import streamyType from "../reducers/types"
import streams from "../api/streams"
import history from '../history';

export const trySignIn = (userId) => {
        return {
            type: streamyType.SIGN_IN,
            payload: userId
        }
}

export const trySignOut = () => {
    return {
        type: streamyType.SIGN_OUT
    }
}

export const createStream = (formValues )=> async (dispatch, getState) => {

    const {userId}= getState().auth_state;
    const response = await streams.post("/streams", {...formValues, userId});

    console.log("createStream response.data = ", response.data);
    dispatch({type: streamyType.CREATE_STREAM, payload: response.data})

    //switch to main route
    history.push("/");

}

export  const fetchStreams = () => async dispatch => {
    const response = await streams.get("/streams");

    dispatch({type: streamyType.FETCH_STREAMS, payload: response.data});
}


export  const fetchStream = (id) => async dispatch => {
    const response = await streams.get(`/streams/${id}`);

    dispatch({type: streamyType.FETCH_STREAM, payload: response.data});
}


export  const editStream = (id, formValues) => async dispatch => {
    const response = await streams.patch(`/streams/${id}`, formValues);

    dispatch({type: streamyType.EDIT_STREAM, payload: response.data});

    //switch to main route
    history.push("/");
}

export const deleteStream = (id) => async dispatch => {
    await streams.delete(`/streams/${id}`);
    dispatch({type: streamyType.DELETE_STREAM, payload: id});
    //switch to main route
    history.push("/");
}
