import React from 'react'
import { Information } from './in-tion/Information'
import { Actors } from './actors/Actors'

export const Id_list = () => {
  return (
    <div>
        <div className=''>
            <Information/>
            <p className=' text-[25px] text-center my-6 px-20 rounded-[5px] font-bold bg-red-500 text-white'> Actors </p>
            <Actors/>
        </div>
    </div>
  )
}
