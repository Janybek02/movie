import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { popularSlice } from "../user-slice/PopularSl";

interface SeriesData {
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

interface Series {
  series: SeriesData[];
  error: string;
}

const initialState: Series = {
  series: [],
  error: "",
};

export const seriesSlice = createSlice({
  name: "series",
  initialState,
  reducers: {
    SeriesSuccess(state, action: PayloadAction<SeriesData[]>) {
      state.series = action.payload;
    },
    SeriesError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
  },
});

export default seriesSlice.reducer;
export const { SeriesSuccess, SeriesError } = seriesSlice.actions;
