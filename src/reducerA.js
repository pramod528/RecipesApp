const initialState = {
    a:1,
    jsonPlaceholders : [],
    userDetail: {}
}

const reducer = (state = initialState, action) => {
    if(action.type === "UPDATE_A"){
        return {
            ...state,
            a: state.a + action.b
        }
    }
    if(action.type === "getPosts"){
        return {
            ...state,
            jsonPlaceholders: action.payload
        }
    }
    if(action.type === "USER_DETAIL"){
        return {
            ...state,
            userDetail: action.payload
        }
    }
    if(action.type === "USER_SEARCH"){
        return {
            ...state,
            jsonPlaceholders: action.payload
        }
    }
    
    return state;
}

export default reducer;