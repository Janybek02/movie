import React from 'react'
import { Link } from 'react-router-dom'


// bg-[#1F1B2E]
export const Header = () => {
    return (
        <div className=' w-full h-[70px] bg-[#07050e] p-4 items-center px-16'>
            <div className='flex items-center px-[60px] justify-between'>
                <div className=''>
                    <Link to={"/"} >
                        <p className=' text-[25px] px-6 bg-[#1f1b2e] rounded-[5px] text-white '>Logo</p>
                    </Link>
                </div>
                <div className=' flex justify-between items-center w-[350px] '>
                    <Link to={"/popular"}>
                        <p className=' text-white text-[18px] px-4 py-1 bg-[#1f1b2e] rounded-[5px]  '>Popular</p>
                    </Link>
                    <Link to={"/series"}>
                        <p className=' text-white text-[18px] px-4 py-1 bg-[#1f1b2e] rounded-[5px]   '>Ceries</p>
                    </Link>
                    <Link to={"/genre"}>
                        <p className=' text-white text-[18px] px-4 py-1 bg-[#1f1b2e] rounded-[5px]'>Genre</p>
                    </Link>
                </div>
                <div className='  flex justify-between items-center w-[180px]'>
                        <p className=' text-[20px] px-4 py-1 bg-[#1f1b2e] rounded-[5px] text-white '>Favorite</p>
                        <p className=' text-[20px] px-4 py-1 bg-[#1f1b2e] rounded-[5px] text-white'>Ru</p>
                </div>
            </div>
        </div>
    )
}
