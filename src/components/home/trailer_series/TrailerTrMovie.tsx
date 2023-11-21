import {useAppDispatch, useAppSelectore} from "../../../hooks/Hooks";
import {trailerClose} from "../../../store/trailer-slice/Trailer-slice";
import {getSeriesTrailer} from "../../../store/actions";
import Slider from "react-slick";
import React from "react";

export const TrailerTrMovie  = () => {
    const { trend } = useAppSelectore(state => state.trendReducer)
    const { trailer, close } = useAppSelectore(state => state.trailerReducer)

    const allFunc = (id:any) => {
        dispatch(trailerClose(true))
        dispatch(getSeriesTrailer(id))
    }

    const dispatch = useAppDispatch()
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    }
    return (
        <>

            <div className='trailer w-full mt-[15px]  bg-[#101616] h-[300px] '>
                <div className=' w-full ml-3 h-full mt-[30px] '>
                    <Slider {...settings} >
                        {
                            trend.map(items => {
                                return <div>
                                    <div
                                        style={{
                                            background: `url("https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${items.backdrop_path}") center center/cover no-repeat`
                                        }}
                                        className='  w-[400px] rounded-lg  h-[200px]  '>
                                        <div className=' w-full h-full bg-[#1016166c] flex items-center justify-center'>
                                            <button
                                                onClick={() => allFunc(items.id)}
                                                className=' w-[50px] h-[50px]  '>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-full h-full text-white  ">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                                                </svg>
                                            </button>

                                        </div>

                                    </div>
                                    <div className='text-center  '>
                                        <p className=' text-white text-[18px]'>{items.title}</p>
                                        <p className=' text-slate-200 text-[15px]' >{items.release_date}</p>
                                    </div>
                                </div>
                            })
                        }
                    </Slider>
                </div>
            </div>
        </>
    )
}