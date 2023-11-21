import { configureStore, combineReducers } from "@reduxjs/toolkit";
import popularReducer from  "./user-slice/PopularSl" 
import seriesReducer from "./seriesClice/SeriesSlise"
import genreReducer from "./genre/GenreSl"
import trailerReducer from "./trailer-slice/Trailer-slice"
import idInformReducer from  "./id-inform/IdInformSlise"
import trendReducer from "./trend-slice/Trend-slice"
const rootReducer = combineReducers({
    popularReducer,
    seriesReducer,
    genreReducer,
    trailerReducer,
    idInformReducer,
    trendReducer,
})

export const setUpStore = () =>  configureStore({
    reducer: rootReducer,
})


export type RootState = ReturnType <typeof rootReducer>
export type AppStore = ReturnType <typeof setUpStore>
export type AppDispatch = AppStore["dispatch"]