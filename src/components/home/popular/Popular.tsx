import React, { useEffect, useState } from 'react'
import { getData, } from '../../../store/actions'
import Slider from 'react-slick'
import { useAppSelectore, useAppDispatch } from '../../../hooks/Hooks'
import { MdOutlineFavorite } from "react-icons/md"
import { Link } from 'react-router-dom'


export const Popular = () => {
    const [click, setClick] = useState<boolean>(false)
    const { popular } = useAppSelectore(state => state.popularReducer)
    const { series } = useAppSelectore(state => state.seriesReducer)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getData())
    }, [])
    let i = "";
    let slider
    const windSlider = window.innerWidth
    let speed = windSlider >= 800 ?  2000 : 1000
    let auto = windSlider >= 800

    slider = windSlider >= 1500 ?  7 : (windSlider >= 1250 ? 6 : (windSlider >= 1100 ? 5 : (windSlider >= 800 ? 4 : (windSlider >= 500 ? 3 : 2))))
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: slider,
        slidesToScroll: 2,
        autoplay: auto,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    }

    return (
        <>
            <div className=' popular w-full  bg-[#07050e] rounded-t-[5px]'>
                <Slider {...settings}>
                    {
                        popular.map((items) => {
                            const wid: number = Math.trunc(items.vote_average)
                            i = wid >= 8 ? "border-[#1eb022]" : (wid >= 7 ? 'border-[#3f6d11]' : (wid >= 6 ? "border-[#d1e215]" : (wid >= 5 ? "border-[#817605]" : (wid >= 4 ? "boreder-orange" : "border-slate"))))
                            return <>
                                <div className=' w-[180px] max-[600px]:w-[150px] h-[250px] '>
                                    <div className='w-full h-full rounded-[50%] reletive'>
                                        <Link to={`/${items.id}`}>
                                            <div className='w-full h-full rounded-[20px]'>
                                                <img className=' rounded-[20px]' src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${items.poster_path}`} alt="" />
                                            </div>
                                        </Link>
                                        <button className=' absolute ml-[140px] max-[600px]:ml-[120px] top-1 shadow-sm  text-red-500 text-[25px]'><MdOutlineFavorite /></button>
                                        <div >
                                            <div className=' absolute top-[250px] max-[600px]:top-[210px] bg-black w-[40px] h-[40px] rounded-[50%]'>
                                                <div className={`border-[3px] ${i}  w-[90%] h-[90%] m-[2px] rounded-[50%] flex items-center justify-center `}>
                                                    <p className=' text-white text-[13px] font-bold '>
                                                        {wid * 10}%
                                                    </p>
                                                </div>
                                            </div>
                                            <p className='text-white text-[18px] mt-12 max-[600px]:mt-3 max-[600px]:text-[15px] '>
                                                {items.title || items.name}
                                            </p>
                                            <p className='  text-slate-400 text-[15px] max-[600px]:text-[13px]  '>
                                                {items.first_air_date || items.release_date}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        })
                    }
                </Slider>
            </div>
        </>
    )
}