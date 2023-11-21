import { configureStore, combineReducers } from "@reduxjs/toolkit";
import popularReducer from  "./user-slice/PopularSl" 
import seriesReducer from "./seriesClice/SeriesSlise"
import genreReducer from "./genre/GenreSl"
import trailerReducer from "./trailer-slice/Trailer-slice"
import idInformReducer from  "./id-inform/IdInformSlise"
const rooteReducer = combineReducers({
    popularReducer,
    seriesReducer,
    genreReducer,
    trailerReducer,
    idInformReducer,
})

export const setUpStore = () =>  configureStore({
    reducer: rooteReducer,
})


export type RooteState = ReturnType <typeof rooteReducer>
export type AppStore = ReturnType <typeof setUpStore>
export type AppDispatch = AppStore["dispatch"]