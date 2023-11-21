import React, { useEffect, useState } from 'react'
import { getData } from '../../store/actions'; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { title } from 'process'
import { Title } from './title/Title'
import { Popular } from './popular/Popular';
import { Series } from './ceries/Ceries';
import { useAppDispatch } from '../../hooks/Hooks';
import { Traier } from './trailer/Trailer';



export const Home = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
      dispatch(getData())
  })

  return (
    <div className='flex flex-col justify-center items-center '>
      <Title />
      <p className=' text-[30px] mb-7 font-bold text-white'> Popular movies </p>
      <Popular />
      <p className=' text-[30px] mt-[50px] font-bold text-white'> Trailers</p>
      <Traier/>
      <p className=' text-[30px] mb-7 mt-[50px] font-bold text-white'> Tv series</p>
     <Series/>
    </div>

  )
}
