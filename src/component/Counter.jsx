import React, { useContext, useReducer } from 'react'
import reducer from "../Context/Reducer"
import {Context} from "../index"

function Counter() {
    const res = useContext(Context)
    console.log(res);
    

    let [value, dispatch] = useReducer(reducer, 2)
    const incHandler = () => {
        dispatch({
            type: "Inc",
            payload: value+1
        })
    }
    const decHandler = () => {
        dispatch({
            type: "Dec",
            payload: --value
        })
    }
    return (
        <>
            <div >Counter = {value}</div>
            <button onClick={incHandler}>Incremet</button>
            <button  onClick={decHandler}>Decrement</button>
        </>

    )
}

export default Counter