import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import {  } from "@reduxjs/toolkit";


interface Istate  {
    loanding: boolean,
    actors: any[],
    error: string
}

const initialState: Istate = {
    loanding: false,
    actors: [],
    error: ""

}


export const actorsSlice = createSlice({
    name: "actors",
    initialState, 
    reducers : {
        actorsLoanding(state, action: PayloadAction<boolean>){
            state.loanding = action.payload
            console.log(action.payload);
            
        },
        actorsSuccess(state, action: PayloadAction<any[]>){
            state.actors = action.payload
            console.log("actors", action.payload);
            
        },
        actorsError(state, action: PayloadAction<string>){
            state.error = action.payload

        },

    }
})

export default actorsSlice.reducer
export const { actorsLoanding, actorsSuccess, actorsError} = actorsSlice.actions