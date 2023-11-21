import { AppDispatch } from "../store";
import axios from "axios";
import {
  getDataError,
  getDataLoanding,
  getDataSuccess,
} from "../user-slice/PopularSl";
import { SeriesError, SeriesSuccess } from "../seriesClice/SeriesSlise";
import { genreSuccess, genreError } from "../genre/GenreSl";
import { trailerSuccess, trailerError, trailerLoanding } from "../trailer-slice/Trailer-slice";
import { idInformError, idInformLoanding, idInformSuccess } from "../id-inform/IdInformSlise";

const apiKey: string = "api_key=81cd179ad56aeece49d8340b7c075f89";
// popular


export const getData = () => async (dispatch: AppDispatch) => {
  try {
    setTimeout(()=> {
      dispatch(getDataLoanding());
    }, 1000)
    const url = `https://api.themoviedb.org/3/discover/movie?${apiKey}`;
    const { data } = await axios.get(url);
    dispatch(getDataSuccess(data.results));
  } catch (e) {
    const str: string = "Ошибка!!!!";
    dispatch(getDataError(str));
  }
};
//// popular

// series
export const getMovieSeries = () => async (dispatch: AppDispatch) => {
  try {
    const url = `https://api.themoviedb.org/3/discover/tv?${apiKey}`;
    const { data } = await axios.get(url);
    dispatch(SeriesSuccess(data.results));
  } catch (e) {
    const str: string = "Ошибка!!!!";
    dispatch(SeriesError(str));
  }
};
// series

export const getTvSeries = () => async (dispatch: AppDispatch) => {
  try {
    const url = `https://api.themoviedb.org/3/tv/airing_today?${apiKey}`;
    const { data } = await axios.get(url);
    dispatch(genreSuccess(data.results));
  } catch (e) {
    const str: string = "Ошибка!!!!";
    dispatch(genreError(str));
  }
};

export const getTrailer = (movie_id : any) => async (dispatch: AppDispatch) => {
    try {
      setTimeout(() => {
        dispatch(trailerLoanding(true))
      }, 1000)
     
      const url = `https://api.themoviedb.org/3/movie/${movie_id}/videos?${apiKey}`;
      const {data}  = await axios.get(url);
      dispatch(trailerSuccess(data.results));   
    } catch (e) {
      const str: string = "Ошибка!!!!";
      dispatch(trailerError(str));
    }
  };





export const getIdInform = (movie_id: any) => async (dyspatch: AppDispatch) => {
  try {
    setTimeout(() => {
      dyspatch(idInformLoanding(true))
    }, 1000)
    const url: string = `https://api.themoviedb.org/3/movie/${movie_id}?${apiKey}`
    const {data } = await axios.get(url)
    dyspatch(idInformSuccess(data))
  } catch (e)  {
      dyspatch(idInformError("oofoasoo1!!!!"))
  }
}
export const getIdInformSerice = (movie_id: any) => async (dyspatch: AppDispatch) => {
  try {
    setTimeout(() => {
      dyspatch(idInformLoanding(true))
    }, 1000)
    const url: string = `https://api.themoviedb.org/3/movie/${movie_id}?${apiKey}`
    const {data } = await axios.get(url)
    dyspatch(idInformSuccess(data))
  } catch (e)  {
    dyspatch(idInformError("oofoasoo1!!!!"))
  }
}