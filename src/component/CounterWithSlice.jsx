import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Inc, Dec } from '../Redux/Slices/counterSlice'

function CounterWithSlice() {
    let value = useSelector((state) => state.counterReducerThroughSlice.counter_slice)

    const dispatch = useDispatch()
    console.log(value, "test2");

    const incHandler = () => {
        dispatch(Inc(++value ));
    };

    const decHandler = () => {
        dispatch(Dec(--value)); 
    };
    return (
        <>
            <div >Counter = {value}</div>
            <button onClick={incHandler}>Incremet</button>
            <button onClick={decHandler}>Decrement</button>
        </>
    )
}

export default CounterWithSlice