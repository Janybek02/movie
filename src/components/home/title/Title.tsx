import React, {FC} from 'react'
import {useAppSelectore} from '../../../hooks/Hooks'

export const Title = () => {
    const {popular, loaning} = useAppSelectore(state => state.popularReducer)
    const bg = popular[Math.floor(Math.random() * popular.length)];
    const gbNew = loaning ? bg.backdrop_path : "t5zCBSB5xMDKcDqe91qahCOUYVV.jpg"

    return (
        // <div>
        <div className=' w-full  pb-10  '>
            <div
                style={{
                    background: `url("https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${gbNew}") center/cover `
                }}
                className={`w-full    bg-filter h-[400px] bg-no-repeat bg-cover bg-center `}>
                <div className=' h-full w-full max-[1000px]:pl-[5%]  pl-[100px] pt-[50px] bg-[#10161689]'>
                    <p className='  text-white max-[900px]:text-[30px] text-[35px] font-bold '>
                        Wellcome! you can find all the movies here
                    </p>
                    <p className='text-white text-[25px] font-medium max-[900px]:text-[20px]'>
                        Millions of films, TV series and people. Explore now.
                        <div className=' w-[90%] pt-10'>
                            <label className="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                              stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                    </svg>
                                </div>
                                <input type="search" id="default-search"
                                       className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500    "
                                       placeholder="Search Mockups, Logos..." required/>
                                <button type="submit"
                                        className="text-white absolute right-2.5 bottom-2.5 bg-[#101616] hover:bg-white hover:text-[#101616] border-[1px] border-[#101616] focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2  ">Search
                                </button>
                            </div>
                        </div>
                    </p>
                </div>
            </div>
        </div>
    )
}
