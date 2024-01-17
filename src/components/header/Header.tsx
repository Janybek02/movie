import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


// bg-[#1F1B2E]
export const Header = () => {
    const [item, setItem] = useState("#07050e")
    const [isOpen, setIsOpen] = useState(false);
    const [chooseMenu, setChooseMenu] = useState(true)
    const genericHamburgerLine = `h-1 w-8 my-1 rounded-full bg-black transition ease transform duration-300`;
    const menu = <>
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
            <div className=' flex justify-between items-center w-[180px]'>
                <p className=' text-[20px] font-bold  rounded-[5px] text-gray-600 hover:text-white '>Favorite</p>
                <p className=' text-[20px] font-bold  rounded-[5px] text-gray-600 hover:text-white'>Ru</p>
            </div>
        </div>
    </>
    const burgerBox = <>
        <div className=' w-full flex justify-between items-center '>
            <button
                className="flex flex-col h-12 w-12 ml-2  rounded justify-center items-center group"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div
                    className={`${genericHamburgerLine} ${isOpen
                            ? "rotate-45 bg-slate-50 translate-y-3 opacity-50 group-hover:opacity-100"
                            : "opacity-50 bg-slate-50 group-hover:opacity-100"
                        }`}
                />
                <div
                    className={`${genericHamburgerLine} ${isOpen ? "opacity-0 bg-slate-50 " : "bg-slate-50 opacity-50 group-hover:opacity-100"
                        }`}
                />
                <div
                    className={`${genericHamburgerLine} ${isOpen
                            ? "-rotate-45 bg-slate-50 -translate-y-3 opacity-50 group-hover:opacity-100"
                            : "opacity-50 bg-slate-50 group-hover:opacity-100"
                        }`}
                />
            </button>
            <Link
            onClick={() => setIsOpen(false)}
            to={"/"} >
                <p className=' text-[25px] px-6 font-bold  rounded-[5px]hidden md:block cursor-pointer text-white hover:text-white uppercase   '>Logo</p>
            </Link>
        </div>
    </>

    
    const burgerMenu =  <>
        <div  className={` w-full ${isOpen ? "translate-x-[0px]" : "translate-x-[-400px]"} transition duration-1000 h-[110vh] bg-black/60 top-16 flex-col flex items-center left-0 absolute z-10`}>
       
                <Link to={"/popular"}>
                    <p 
                        onClick={() => setIsOpen(!isOpen)}
                    className=' text-white text-[18px] font-bold  rounded-[5px]  '>Popular</p>
                </Link>
                <Link
                onClick={() => setIsOpen(!isOpen)}
                to={"/series"}>
                    <p className=' text-white text-[18px] font-bold  rounded-[5px]   '>Ceries</p>
                </Link>
                <Link
                onClick={() => setIsOpen(!isOpen)}
                to={"/genre"}>
                    <p className='text-white text-[18px]  font-bold rounded-[5px]'>Genre</p>
                </Link>
            
            
                <p className=' text-[20px] font-bold  rounded-[5px] text-white '>Favorite</p>
                <p className=' text-[20px] font-bold  rounded-[5px] text-white'>Ru</p>
            </div>
    
    </>
    const scroll = () =>{
        if (isOpen === true){
            return document.body.style.overflow = "hidden"
        } else document.body.style.overflow = "auto"
    }
useEffect(() => {
    scroll()
    window.addEventListener("scroll", () => {
        const windowWidth = window.scrollY
        if (windowWidth > 72) {
            setItem("rgba(0, 0 , 0 ,70%)")
        } else {
            setItem("#07050e")
        }
    })
    const item = window.innerWidth > 600 ? true : false
    setChooseMenu(item )
    
})
    return (
        <div
            style={{
                background: `${item}`
            }}
            className={` w-full h-[70px]  top-0 z-50 sticky  p-4 items-center max-[800px]:px-1 px-16`}>
            {chooseMenu ? menu : burgerBox}
             {burgerMenu }
        </div>
    )
}
