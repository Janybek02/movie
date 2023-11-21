import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface Trend {
    trend :any[],
    loading : boolean,
    error : string
}

const initialState :Trend = {
    trend : [],
    loading : false,
    error : ""
}


const trendSlice = createSlice({
    name: "trend",
    initialState,
    reducers :{
        trendLoading( state, action: PayloadAction<boolean>){
            state.loading = action.payload
        },
        trendSuccess(state, action:PayloadAction<any[]>)  {
            state.trend = action.payload
        },
        trendError(state, action:PayloadAction<string>){
            state.error = action.payload
        }
    }
})


export default  trendSlice.reducer;
export const { trendLoading, trendSuccess, trendError }  = trendSlice.actions