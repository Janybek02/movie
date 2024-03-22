import { AppDispatch } from "../store";
import axios from "axios";
import {
  getDataError,
  getDataLoading,
  getDataSuccess,
} from "../user-slice/PopularSl";
import {trendError, trendLoading, trendSuccess} from "../trend-slice/Trend-slice";
import { SeriesError, SeriesSuccess } from "../seriesClice/SeriesSlise";
import { genreSuccess, genreError } from "../genre/GenreSl";
import { trailerSuccess, trailerError, trailerLoading } from "../trailer-slice/Trailer-slice";
import { idInformError, idInformLoading, idInformSuccess } from "../id-inform/IdInformSlise";
import { actorsError, actorsSuccess, actorsLoanding } from "../actors-slice/ActorsSlice";
const apiKey: string = "api_key=81cd179ad56aeece49d8340b7c075f89";
export const getData = () => async (dispatch: AppDispatch) => {
  try {
    setTimeout(()=> {
      dispatch(getDataLoading());
    }, 1000)
    const url = `https://api.themoviedb.org/3/discover/movie?${apiKey}`;
    const { data } = await axios.get(url);
    dispatch(getDataSuccess(data.results));
  } catch (e) {
    const str: string = "Ошибка!!!!";
    dispatch(getDataError(str));
  }
};
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
        dispatch(trailerLoading(true))
      }, 1000)
     
      const url = `https://api.themoviedb.org/3/movie/${movie_id}/videos?${apiKey}`;
      const {data}  = await axios.get(url);
      dispatch(trailerSuccess(data.results));   
    } catch (e) {
      const str: string = "Ошибка!!!!";
      dispatch(trailerError(str));
    }
  };
export const getSeriesTrailer = (id : any) => async (dispatch: AppDispatch) => {
  try {
    setTimeout(() => {
      dispatch(trailerLoading(true))
    }, 1000)

    const url = `https://api.themoviedb.org/3/tv/${id}/videos?${apiKey}`;
    const {data}  = await axios.get(url);
    dispatch(trailerSuccess(data.results));
  } catch (e) {
    const str: string = "Ошибка!!!!";
    dispatch(trailerError(str));
  }
};
export const getIdInform = (movie_id: any) => async (dispatch: AppDispatch) => {
  try {
    setTimeout(() => {
      dispatch(idInformLoading(true))
    }, 1000)
    const urlIn: string = `https://api.themoviedb.org/3/movie/${movie_id}?${apiKey}`
    const {data } = await axios.get(urlIn)
    dispatch(idInformSuccess(data))
  } catch (e)  {
      dispatch(idInformError("oofoasoo1!!!!"))
  }
}
export const trendGetMovie = () => async (dispatch :AppDispatch) => {
  try {
    setTimeout(() => {
      dispatch(trendLoading(true))
    }, 1000)
    const url: string = `https://api.themoviedb.org/3/trending/movie/day?${apiKey}`
    const {data } = await axios.get(url)
    dispatch(trendSuccess(data.results))
  } catch (e)  {
    dispatch(trendError("oofoasoo1!!!!"))
  }

}


export const getActors = (movie_id: any) => async (dispatch: AppDispatch)  =>   {  
  try {
    setTimeout(() => {
      dispatch(actorsLoanding(true))
    }, 1000)
    const url: string = `https://api.themoviedb.org/3/movie/${movie_id}/credits?${apiKey}`
    const {data } = await axios.get(url)
    dispatch(actorsSuccess(data.cast))
  } catch (e) {
    dispatch(actorsError("errrrrzdfgasdfgsd"))
  }
}
