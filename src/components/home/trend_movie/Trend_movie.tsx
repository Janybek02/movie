import {useAppDispatch, useAppSelectore} from "../../../hooks/Hooks";
import React, {useEffect} from "react";
import { trendGetMovie} from "../../../store/actions";
import Slider from "react-slick";
import {Link} from "react-router-dom";
import {MdOutlineFavorite} from "react-icons/md";

export const Trend_movie = () => {
    const { trend, error } = useAppSelectore(state => state.trendReducer)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(trendGetMovie())
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
    };

    return (
        <>
            <div className=' popular w-full  bg-[#07050e] rounded-t-[5px]'>
                <Slider {...settings}>
                    {
                        trend.map((items) => {
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

                                        <button className=' absolute ml-[140px] top-1 shadow-sm  text-[#1f1b2ed7] text-[25px]'><MdOutlineFavorite /></button>
                                        <div >
                                            <div className=' absolute top-[250px] bg-black w-[40px] h-[40px] rounded-[50%] max-[600px]:top-[210px]'>
                                                <div className={`border-[3px] ${i}  w-[90%] h-[90%] m-[2px] rounded-[50%] flex items-center justify-center `}>
                                                    <p className=' text-white text-[13px] font-bold '>
                                                        {wid * 10}%
                                                    </p>
                                                </div>
                                            </div>
                                            <p className='text-white text-[18px] mt-12 max-[600px]:mt-3 max-[600px]:text-[15px]  '>
                                                {items.title || items.name}
                                            </p>
                                            <p className='  text-slate-400 text-[15px] max-[600px]:text-[13px] '>
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