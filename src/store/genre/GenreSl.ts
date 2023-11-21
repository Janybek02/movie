import { createSlice, PayloadAction } from "@reduxjs/toolkit"



interface State{
    seriece: any[],
    error: string
}

const initialState: State = {
    seriece : [],
    error: ""
}



export const genreSlice = createSlice({
    name :"genre",
    initialState,
    reducers: {
        genreSuccess(state, action: PayloadAction<any[]>) {
            state.seriece = action.payload
        },
        genreError(state, action: PayloadAction <string>) {
            state.error = action.payload
        },
        

    }
})


export default genreSlice.reducer
export const {genreSuccess, genreError} = genreSlice.actions