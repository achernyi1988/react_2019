const postsReducer = (posts = [], action) => {
    console.log(action);
    if(action.type === "FETCH_POST"){
        return action.payload;
    }
    return posts;
}

export default postsReducer;