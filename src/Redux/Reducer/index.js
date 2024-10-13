import counterReducer from "./counterReducer";
import counterReducerCopy from "./counterReducerCopy";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    original: counterReducer,
    copy: counterReducerCopy
})

export default rootReducer
