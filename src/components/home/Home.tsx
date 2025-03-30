import React, { useEffect, useState } from 'react'
import { getData } from '../../store/actions';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { title } from 'process'
import { Title } from './title/Title'
import { Popular } from './popular/Popular';
import { Series } from './ceries/Ceries';
import { useAppDispatch } from '../../hooks/Hooks';
import { Trailer } from './trailer/Trailer';
import { TrailerTrMovie } from "./trailer_series/TrailerTrMovie";
import { Link } from 'react-router-dom';
import { TbPlayerTrackNextFilled } from "react-icons/tb";

export const Home = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getData())
    })

    return (
        <div className=' '>
            <Title />

            <Link to={"/popular"}  className=' w-full flex px-10  my-6 justify-between items-center'>
                <p className=' text-[22px]  rounded-[5px] font-bold  text-white'> Popular </p>
                <div className=' group flex items-center group-hover:text-red-500'>
                    <p className='text-white text-xl font-medium group-hover:text-red-500 pr-2'>More</p>
                    <TbPlayerTrackNextFilled className='group-hover:text-red-500 text-white text-xl' />
                </div>
            </Link>
            <Popular />
            <p className=' text-[25px] my-6 px-10 rounded-[5px] font-bold  text-white'> Trailers</p>
            <Trailer />
            <Link to={"/series"}  className=' w-full flex px-10  my-6 justify-between items-center'>
                <p className=' text-[22px]  rounded-[5px] font-bold  text-white'> Series </p>
                <div className=' group flex items-center group-hover:text-red-500'>
                    <p className='text-white text-xl font-medium group-hover:text-red-500 pr-2'>More</p>
                    <TbPlayerTrackNextFilled className='group-hover:text-red-500 text-white text-xl' />
                </div>
            </Link>
            <Series />
            <p className=' text-[25px] my-6 px-10 rounded-[5px] font-bold text-white'> Trailers</p>
            <TrailerTrMovie />
        </div>

    )
}
