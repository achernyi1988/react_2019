const userReducer = (users = [], action) => {
    console.log(action);
    if(action.type === "FETCH_USER"){
        return [ ... users, action.payload];
    }
    return users;
}

export default userReducer;