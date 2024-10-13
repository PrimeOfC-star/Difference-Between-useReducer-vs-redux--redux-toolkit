import { createSlice,createSelector } from "@reduxjs/toolkit"

const counter =createSlice({
    name:"Counter",
    initialState:{
        counter_slice: 3
    },
    reducers:{
       Inc:(state,action)=>{
        console.log(state,"and123",action);
        
        return {
            ...state,
            counter_slice: action.payload
        }
       },
       Dec:(state,action)=>{
        return {
            ...state,
            counter_slice: action.payload
        }
       }
    }
})

export const counterSelector = createSelector(
    (state)=> state,
    (state)=> state.counter_slice
)

export const {Inc, Dec} = counter.actions

export default counter.reducer