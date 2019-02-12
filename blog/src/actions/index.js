import jsonPlaceholder from "../api/jsonPlaceholder"
import _ from "lodash"

export const fetchPostsAndUsers = () => async (dispatch, getState )=> {
    await dispatch(fetchPosts());

    console.log(getState().posts);
    const userIds = _.uniq(_.map(getState().posts, "userId"));

    userIds.forEach(id => dispatch(fetchUser(id)));
};

export const fetchPosts = () => async dispatch => {
    const resp = await jsonPlaceholder.get("/posts");
    dispatch({type: "FETCH_POST", payload: resp.data});
};


export const fetchUser = (id) => async dispatch => {
    console.log("fetchUser = ", `/users/${id}`);
    const resp = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({type: "FETCH_USER", payload: resp.data});
};
