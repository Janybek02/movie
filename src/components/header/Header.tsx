import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


// bg-[#1F1B2E]
export const Header = () => {
    const [item, setItem] = useState("#07050e")
    useEffect(() => {
        window.addEventListener("scroll" , () =>  {
    const  windowWidth = window.scrollY
        if (windowWidth > 72) {
            setItem("rgba(0, 0 , 0 ,70%)")
        }else {
            setItem("#07050e")
        }
    })
    })
       
    return (
        <div
            style={{
                background: `${item}`
            }}
        className={` w-full h-[70px]  top-0 z-10 sticky p-4 items-center max-[800px]:px-1 px-16`}>
            <div className='flex items-center px-[60px]  top-1 max-[600px]:hidden max-[900px]:px-1 justify-between'>
                <div className=''>
                    <Link to={"/"} >
                        <p className=' text-[25px] px-6 font-bold  rounded-[5px]hidden md:block cursor-pointer text-white hover:text-white uppercase   '>Logo</p>
                    </Link>
                </div>
                <div className=' flex justify-between items-center w-[350px] '>
                    <Link to={"/popular"}>
                        <p className=' text-gray-600 hover:text-white text-[18px] font-bold  rounded-[5px]  '>Popular</p>
                    </Link>
                    <Link to={"/series"}>
                        <p className=' text-gray-600 hover:text-white text-[18px] font-bold  rounded-[5px]   '>Ceries</p>
                    </Link>
                    <Link to={"/genre"}>
                        <p className=' text-gray-600 hover:text-white text-[18px]  font-bold rounded-[5px]'>Genre</p>
                    </Link>
                </div>
                <div className='  flex justify-between items-center w-[180px]'>
                        <p className=' text-[20px] font-bold  rounded-[5px] text-gray-600 hover:text-white '>Favorite</p>
                        <p className=' text-[20px] font-bold  rounded-[5px] text-gray-600 hover:text-white'>Ru</p>
                </div>
            </div>
        </div>
    )
}
