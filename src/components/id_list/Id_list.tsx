import React from 'react'
import { Information } from './in-tion/Information'
import { Actors } from './actors/Actors'
import { Link } from 'react-router-dom'
import { TbPlayerTrackNextFilled } from 'react-icons/tb'
export const Id_list = () => {
  return (
    <div>
      <div className=''>
        <Information />
        <Link to={"/series"} className=' w-full flex px-10  my-6 justify-between items-center'>
          <p className=' text-[22px]  rounded-[5px] font-bold  text-white'> Series </p>
          <div className=' group flex items-center group-hover:text-red-500'>
            <p className='text-white text-xl font-medium group-hover:text-red-500 pr-2'>More</p>
            <TbPlayerTrackNextFilled className='group-hover:text-red-500 text-white text-xl' />
          </div>
        </Link>

        <Actors />
      </div>
    </div>
  )
}
