import React, { useEffect } from "react";
import { useAppDispatch, useAppSelectore } from "../../../hooks/Hooks";
import { getData } from "../../../store/actions";
import { MdOutlineFavorite, MdBookmarkAdded } from "react-icons/md";
import { Link } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import img from "../../../image/image.png";
import Slider from "react-slick";
import { FaAngleDoubleRight } from "react-icons/fa";
export const Actors = () => {
  const { actors, error, loanding } = useAppSelectore(
    (state) => state.actorsSlice
  );
 let i = "";
    let slider
    const windSlider = window.innerWidth
    let speed = windSlider >= 800 ? 2000 : 1000
    let auto = windSlider >= 800

    slider = windSlider >= 1500 ? 7 : (windSlider >= 1250 ? 6 : (windSlider >= 1100 ? 5 : (windSlider >= 800 ? 4 : (windSlider >= 500 ? 3 : 2))))
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: slider,
        slidesToScroll: 3,
        cssEase: "linear"
    }
    return (
        <>
            <div className=' popular w-full  bg-[#07050e] rounded-t-[5px]'>
                <Slider {...settings}>
                    {
                        actors.map((items) => {
                             return <>
                                <div className=' w-[180px] max-[600px]:w-[150px] h-[250px] '>
                                    <div className='w-full h-full rounded-[50%] reletive'>
                                        <Link to={`/${items.id}`}>
                                            <div className='w-full h-full rounded-[20px]'>
                                                <img className=' rounded-[20px]' src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${items.profile_path}`} alt="" />
                                            </div>
                                        </Link>
                                        <div >     
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