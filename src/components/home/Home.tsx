import React, {useEffect, useState} from 'react'
import {getData} from '../../store/actions';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {title} from 'process'
import {Title} from './title/Title'
import {Popular} from './popular/Popular';
import {Series} from './ceries/Ceries';
import {useAppDispatch} from '../../hooks/Hooks';
import { Trailer} from './trailer/Trailer';
import { TrailerTrMovie} from "./trailer_series/TrailerTrMovie";
import {Trend_movie} from "./trend_movie/Trend_movie";


export const Home = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getData())
    })

    return (
        <div className='flex flex-col justify-center items-center '>
            <Title/>
            <p className=' text-[30px] mb-7 px-6 rounded-[5px] font-bold bg-[#1f1b2e] text-white'> Popular </p>
            <Popular/>
            <p className=' text-[30px] mt-[50px] font-bold text-white'> Trailers</p>
            <Trailer/>
            <p className=' text-[30px] mb-7 mt-[50px] font-bold text-white'> Trends </p>
            <Trend_movie/>
            <p className=' text-[30px] mt-[50px] font-bold text-white'> Trailers</p>
            <TrailerTrMovie/>
        </div>

    )
}
