export const authReducer = (state={},action) =>{
    switch (action.type) {
        case "LOGGED_IN":
            return {...state,...action.payload}  
        case "LOG_OUT":
            return action.payload  
        default:
            return state
    }
}
