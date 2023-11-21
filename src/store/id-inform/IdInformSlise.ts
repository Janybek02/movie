import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { Tracing } from "trace_events";

interface idInform {
    adult:boolean,
backdrop_path:Tracing,
belongs_to_collection:null
budget:number,
homepage:string,
id:number, 
imdb_id:string,
original_language:string,
original_title:string, 
overview:string, 
popularity: number, 
poster_path:string, 
release_date: string,
revenue:number, 
runtime:number,
status:string,
tagline:string, 
title:string, 
video:boolean, 
genres:any
vote_average:number, 
vote_count:number,
}


interface Istate{
    idInform : idInform[],
    loanding: boolean,
    error: string,
}


const initialState :Istate = {
    idInform : [],
    loanding : false,
    error: ""
}
 const idInformSlice = createSlice({
    name: "idInform",
    initialState,
    reducers: {
        idInformLoanding(state, action:PayloadAction<boolean>){
             state.loanding = action.payload
        },
        idInformSuccess(state, action:PayloadAction<idInform>) {
            console.log(action);
            state.idInform = []
            state.idInform.push(action.payload)  
        },
        idInformError(state, action:PayloadAction<string>) {
            state.error = action.payload
        }
    }
})


export default idInformSlice.reducer
export const {idInformLoanding, idInformError, idInformSuccess } = idInformSlice.actions