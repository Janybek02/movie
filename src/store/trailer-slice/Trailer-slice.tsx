import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TrailerData {
  backdrop_path: string;
  first_air_date: string;
  id: number;
  name: string;
  title: string;
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
}

interface Trailer {
  trailer: any[];
  error: string;
  loanding : boolean
  close: boolean;
}

const initialState: Trailer = {
  trailer: [],
  loanding : false,
  error: "",
  close: false,
};

export const trailerSlice = createSlice({
  name: "trailer",
  initialState,
  reducers: {
    trailerLoanding(state, action: PayloadAction<boolean>) {
      state.loanding = action.payload
    },
    trailerSuccess(state, action: PayloadAction<any[]>) {
      state.trailer = action.payload
    },
    trailerError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
    trailerClose(state,action: PayloadAction<boolean>){
      state.close = action.payload
    }
  },
});

export default trailerSlice.reducer;
export const { trailerSuccess, trailerError, trailerClose, trailerLoanding } = trailerSlice.actions;