import axios from "axios"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AppDispatch } from "../store"
interface PopularData {
    adult: boolean,
    backdrop_path: string,
    id: string,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: string,
    poster_path: string,
    release_date: string,
    title: string, 
    name: string,
    video: boolean,
    vote_average: number,
    vote_count: number,
    first_air_date: string,
    
}
interface State {
    popular: PopularData[],
    loaning: boolean,
    error: string,
}

const initialState: State = {
    popular: [],
    loaning: false,
    error: "",
}


export const popularSlice = createSlice({
    name: "popular",
    initialState,
    reducers: {
        getDataLoading(state) {
            state.loaning = true
        },
        getDataSuccess(state, action: PayloadAction<PopularData[]>) {
            state.loaning = true
            state.popular = state.popular = action.payload
        },
        getDataError(state, action: PayloadAction<string>) {
            state.loaning = true
            state.error = action.payload
        }
    }
})


export default popularSlice.reducer
export const { getDataLoading, getDataSuccess, getDataError } = popularSlice.actions
