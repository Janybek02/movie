import {useEffect, useState} from "react"
import { useAppDispatch, useAppSelectore } from "../../../hooks/Hooks"
import {getMovieSeries, getTvSeries} from "../../../store/actions"
import Slider from 'react-slick'
import {MdOutlineFavorite} from 'react-icons/md'

export const Series = () => {
    const {error, series } = useAppSelectore(state => state.seriesReducer)
    const [click, setClick] = useState<boolean>(false)
  
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getMovieSeries())
    }, [])
    let i = "";
    let slider 
    const windSlider = window.innerWidth
    slider = windSlider >= 1500 ?  7 : (windSlider >= 1250 ? 6 : (windSlider >= 1100 ? 5 : 4))
    
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: slider,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    return (
        <>
        <div className=' popular w-full m-10  bg-[#101616] rounded-t-[5px]'>
            {/* <div className=' w-full h-[100px] rounded-t-[5px]  bg-[#101616]'>
                <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div
                    onClick={() => setClick(!click)}
                    className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    <p className="ml-3 text-[18px] font-medium text-white "></p>
                </label>
            </div> */}
            <Slider {...settings}>
                {
                    series.map((items) => {
                        const wid: number = Math.trunc(items.vote_average)            
                        i = wid >= 8 ? "border-[#1eb022]" : (wid >= 7 ? 'border-[#3f6d11]' : (wid >= 6 ? "border-[#d1e215]" : (wid >= 5 ? "border-[#817605]" : (wid >= 4 ? "boreder-orange" : "border-slate"))))
                        return <>
                            <div className=' w-[180px] h-[250px] '>
                                <div className='w-full h-full rounded-[50%] reletive'>
                                    <div className='w-full h-full rounded-[20px]'>
                                        <img className=' rounded-[20px]' src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${items.poster_path}`} alt="" />
                                    </div>
                                    <button className=' absolute ml-[140px] top-1 shadow-sm  text-[#1f1b2ed7] text-[25px]'><MdOutlineFavorite /></button>
                                    <div >
                                        <div className=' absolute top-[250px] bg-black w-[40px] h-[40px] rounded-[50%]'>
                                            <div className={`border-[3px] ${i}  w-[90%] h-[90%] m-[2px] rounded-[50%] flex items-center justify-center `}>
                                                <p className=' text-white text-[13px] font-bold '>
                                                    {wid* 10}%
                                                </p>
                                            </div>
                                        </div>
                                        <p className='text-white text-[18px] mt-12  '>
                                            {items.title || items.name}
                                        </p>
                                        <p className='  text-slate-400 text-[15px]  '>
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