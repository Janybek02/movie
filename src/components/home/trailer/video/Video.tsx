import React, { useEffect } from 'react'

import ReactPlayer from 'react-player'
import { useAppDispatch, useAppSelectore } from '../../../../hooks/Hooks'
import { trailerClose } from '../../../../store/trailer-slice/Trailer-slice'
export const Video = () => {
  const { trailer, loading, close } = useAppSelectore(state => state.trailerReducer)
  const dispatch = useAppDispatch()
  
  return (<>
    {
      loading ?
        <div className=' w-full h-full z-10 bg-[#1f1b2ed7] sticky '>
          
          <div className='flex items-center justify-center flex-col sticky top-20 '>
          <button
            onClick={() => dispatch(trailerClose(false))}
          className='  w-[80px] h-[30px] bg-white'>Close</button>
          <div className=' w-[70%] max-[1200px]:w-[100%] '>
          <ReactPlayer
              url={`https://www.youtube.com/watch?v=${trailer[trailer.length - 1].key}`}
              width="100%"
              height="500px"
            />

          </div>
           
          </div>
        </div> :
        <div >Error</div>
    }
  </>
  )
}
