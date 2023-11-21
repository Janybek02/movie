import React from 'react'
import { Link } from 'react-router-dom'


// bg-[#1F1B2E]
export const Header = () => {
    return (
        <div className=' w-full h-[70px] bg-[#101616] p-4 items-center px-16   bg-[# 1D214C]'>
            <div className='flex items-center px-[60px] justify-between'>
                <div className=''>
                    <Link to={"/"} >
                        <p className=' text-[25px]  text-white '>Logo</p>
                    </Link>
                </div>
                <div className=' flex justify-between items-center w-[350px] '>
                    <Link to={"/popular"}>
                        <p className=' text-white text-[18px]  '>Popular</p>
                    </Link>
                    <Link to={"/series"}>
                        <p className=' text-white text-[18px]   '>Ceries</p>
                    </Link>
                    <Link to={"/genre"}>
                        <p className=' text-white text-[18px] ='>Genre</p>
                    </Link>
                </div>
                <div className='  flex justify-between items-center w-[350px]'>
                    <div id='input-div' className=' w-[300px] h-[30px] flex justify-between text-white font-mono text-[17px] rounded-md bg-black open:border-red-50  '>
                        <input id='input' type='text' placeholder='search...' className=' ' />
                        <button className=''>search</button>
                    </div>

                    <p className=' text-[20px]  text-white '>Favorite</p>
                    <p className=' text-[20px] text-white'>Ru</p>
                </div>
            </div>
        </div>
    )
}
