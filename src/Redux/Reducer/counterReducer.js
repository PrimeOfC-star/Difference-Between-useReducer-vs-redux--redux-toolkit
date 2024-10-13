const initialState = {
    counter: 1
}

const counterReducer = (state = initialState, action) => {
    console.log(action, "test", state, "and", action.payload);

    switch (action.type) {
        case "Inc":
            return {
                ...state,
                counter: action.payload
            }

        case "Dec":
            return {
                ...state,
                counter: action.payload
            }

        default:
            return state
    }


}
export default counterReducer;