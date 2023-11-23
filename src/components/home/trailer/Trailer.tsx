import React, {useState, MouseEvent, useEffect} from 'react'
import {useAppDispatch, useAppSelectore} from '../../../hooks/Hooks'
import Slider from 'react-slick'
import {getTrailer} from '../../../store/actions'

import {trailerClose} from '../../../store/trailer-slice/Trailer-slice'

export const Trailer = () => {
    const {popular} = useAppSelectore(state => state.popularReducer)
    const {trailer, close} = useAppSelectore(state => state.trailerReducer)
    const [url, setUrl] = useState("kjQBrc00fB2RjHZB3PGR4w9ibpz.jpg")
    const allFunc = (id: any) => {
        dispatch(trailerClose(true))
        dispatch(getTrailer(id))
    }

    const dispatch = useAppDispatch()
    const width = window.innerWidth
    let slider = width >= 1289 ? 3 : (width >= 780 ? 2 : 1)
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: slider,
        slidesToScroll: slider
    }
    return (
        <>
            <div
                style={{
                    transition: "0.5s",
                    background: `url("https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${url}") center center/cover no-repeat`
                }}
                className='trailer w-full mt-[15px]  bg-[#07050e] h-[300px] '>
                <div className=' w-full rounded h-full  bg-[#10161689]  '>
                    <Slider {...settings} >
                        {
                            popular.map(items => {
                                return <div className=" w-full h-full pt-8 ">
                                    <div
                                        onMouseOver={() => setUrl(items.backdrop_path)}
                                        style={{
                                            background: `url("https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${items.backdrop_path}")  center/cover no-repeat`
                                        }}
                                        className='  w-[400px] max-[900px]:w-[350px] rounded-lg  h-[200px] mx-auto   '>
                                        <div
                                            className=' w-full h-full bg-[#1016166c] rounded-lg flex items-center justify-center'>
                                            <button
                                                onClick={() => allFunc(items.id)}
                                                className=' w-[50px] h-[50px]  '>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                     stroke-width="1.5" stroke="currentColor"
                                                     className="w-full h-full text-white  ">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                          d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"/>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div className='text-center  '>
                                        <p className=' text-white text-[18px]'>{items.title}</p>
                                        <p className=' text-slate-200 text-[15px]'>{items.release_date}</p>
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
