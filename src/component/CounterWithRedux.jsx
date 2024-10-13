import React from 'react'
import {useDispatch , useSelector} from "react-redux"

function CounterWithRedux() {
    // let value = useSelector((state)=>state.counter)   //for single reducer
    let value = useSelector((state)=>state.original.counter) 

    let copy_value = useSelector((state)=>state.copy.counter_copy)  //not used 

    const dispatch = useDispatch()
    console.log(value,"test2");
    
    const incHandler = () => {
        dispatch({
            type: "Inc",
            payload: value + 1
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
            <button onClick={decHandler}>Decrement</button>
        </>
    )
}

export default CounterWithRedux