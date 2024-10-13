const reducer = (state, action) => {
    console.log(state,"qaz");
    
    switch (action.type) {
        case "Inc":
            return state = action.payload
        case "Dec":
            return state = action.payload
        default:
            return state
    }

}
export default reducer;

