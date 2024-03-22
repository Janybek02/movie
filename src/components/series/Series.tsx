import React, {useEffect} from 'react'
import { useAppDispatch, useAppSelectore } from '../../hooks/Hooks'
import { getMovieSeries } from '../../store/actions'
import { Link } from 'react-router-dom'
import { AiFillHeart } from 'react-icons/ai'
import { MdBookmarkAdded } from 'react-icons/md'
export const Series = () => {
    const {series, error,} = useAppSelectore(state => state.seriesReducer)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getMovieSeries())
    }, [])
    let i
  return (
    <div className=' w-[100%] px-2 '>
    <div className=' flex flex-wrap w-[100%] justify-between'>
      {series.length ?
        series.map((items) => {
          const wid: number = Math.trunc(items.vote_average)
          i = wid >= 8 ? "border-[#1eb022]" : (wid >= 7 ? 'border-[#3f6d11]' : (wid >= 6 ? "border-[#d1e215]" : (wid >= 5 ? "border-[#817605]" : (wid >= 4 ? "boreder-orange" : "border-slate"))))
          return <div className=' h-[400px] max-[643px]:h-[324px] max-[475px]:h-[298px]  '>
            <div className=' w-[180px] max-[475px]:w-[110px]  max-[643px]:w-[150px] m-2 max-[643px]:m-[1px] h-[250px] max-[643px]:m-0 '>
              <div className='w-full rounded-[50%] reletive'>
                <Link to={`/${items.id}`}>
                  <div className='w-full h-full rounded-[20px]'>
                    <img className=' rounded-[20px]' src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${items.poster_path}`} alt="" />
                  </div>
                </Link>
                <div >
                  <div className='  flex items-center max-[643px]:w-[50px] w-[100%] ' >
                    <div className=' mt-6 max-[643px]:mt-0 bg-black w-[35px] h-[35px] rounded-[50%]'>
                      <div className={`border-[3px] ${i}  w-[90%] h-[90%] m-[2px] rounded-[50%] flex items-center justify-center `}>
                        <p className=' text-white text-[10px] font-bold '>
                          {wid * 10}%
                        </p>
                      </div>
                    </div>
                    <button className='mt-6 max-[643px]:mt-0 ml-[5px] top-1 shadow-sm  text-red-500 text-[25px]'><AiFillHeart /></button>
                    <button className='mt-6 max-[643px]:mt-0 ml-[5px] top-1 shadow-sm  text-white text-[25px]'><MdBookmarkAdded /></button>
                  </div>

                  <p className='text-white text-[18px]  max-[643px]:text-[15px] max-[473px]:text-[12px] '>
                    {items.title || items.name}
                  </p>
                  <p className='  text-slate-400 text-[15px] max-[643px]:text-[13px]  '>
                    {items.first_air_date || items.release_date}
                  </p>
                </div>
              </div>
            </div>
          </div>
        })
        : <h1 className='text-center text-black'>{error}</h1>}

    </div>

  </div>
  )
}
