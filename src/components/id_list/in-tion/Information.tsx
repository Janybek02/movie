import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelectore } from '../../../hooks/Hooks'
import { getIdInform } from '../../../store/actions'
import { FaPlay } from "react-icons/fa"
import { MdOutlineFavorite, MdBookmarkAdded } from "react-icons/md"
import { getTrailer, getActors} from '../../../store/actions'
import { trailerClose } from '../../../store/trailer-slice/Trailer-slice'

export const Information = () => {
  const { id } = useParams<{ id: string }>()
  const { idInform, loading } = useAppSelectore(state => state.idInformReducer)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getIdInform(id))
    dispatch(getActors(id))

  }, [])
  const allFunc = (id: any) => {
    dispatch(trailerClose(true))
    dispatch(getTrailer(id))
  }
  return (
    <>

      {
        loading ?
          <div className='  w-full h-[80vh] '>
            {idInform.map(items => {
              const wid: number = Math.trunc(items.vote_average)
              let i
              // i = wid >= 8 ? "border-[#1eb022]" : (wid >= 7 ? 'border-[#3f6d11]' : (wid >= 6 ? "border-[#d1e215]" : (wid >= 5 ? "border-[#817605]" : (wid >= 4 ? "boreder-orange" : "border-slate"))))
              return <>
                <div
                  style={{
                    background: `url("https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${items.backdrop_path}") center/cover `
                  }}
                  className={`w-full h-[500px]  `}>
                  <div className=' w-full h-full  bg-[#10161696] max-[750px]:bg-[#0a162bd5]'>
                    <div className='flex w-full items-center max-[750px]:items-start max-[750px]:flex-col  px-[5%] max-[750px]:px-[2%] h-full   '>
                      <div className=' w-[300px] max-[750px]:hidden '>
                        <img className=' w-full  rounded-[20px] ' src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${items.poster_path}`} alt="" />
                      </div>
                      <div className=' w-[70%] ml-[50px] max-[750px]:ml-[5%] ml-[50px]: max-[750px]:w-[90%]  mr-6  flex flex-col justify-between h-[300px]'>
                        <div>
                        <p className=' text-white text-[30px]  max-[900px]:text-[25px] font-bold '>{items.title}</p>
                        <div className=' flex items-center w-[146px] justify-between '>
                          {/*<p className=' text-white font-medium text-[16px] '>{items.genres[0].name || ""}</p>*/}
                          <p className=' text-white font-medium text-[16px] '>{items.release_date}</p>
                        </div>
                        </div>      
                        <div className=' flex items-center ju'>
                          <div className=' flex items-center w-[350px] justify-between'>
                            <div className=' bg-black  w-[50px] h-[50px] rounded-[50%] flex items-center justify-center'>
                              <div className={`border-[4px] border-[#1eb022]  w-[90%] h-[90%] rounded-[50%] flex items-center justify-center `}>
                                <p className=' text-white  text-[13px] font-bold '>
                                  {wid * 10}%
                                </p>
                              </div>
                            </div>
                            <div className=' w-[40px] h-[40px] rounded-[50%] bg-[#101616] flex items-center justify-center'>
                              <p className=' text-white text-[20px] '>
                                <MdOutlineFavorite />
                              </p>
                            </div>
                            <div className=' w-[40px] h-[40px] rounded-[50%] bg-[#101616] flex items-center justify-center'>
                              <p className=' text-white text-[20px] '>
                                <MdBookmarkAdded />
                              </p>
                            </div>
                            <div className=' flex items-center '>
                              <div className=' w-[40px] h-[40px] rounded-[50%] bg-[#101616] flex items-center justify-center'>
                                <button
                                  onClick={() => allFunc(items.id)}
                                  className=' text-white hover:text-slate-300 text-[20px] ml-1'>
                                  <FaPlay />
                                </button>
                              </div>
                              <button
                                onClick={() => allFunc(items.id)}
                              >
                                <p className=' text-white ml-2 hover:text-slate-300  text-[18px] font-bold  '>Watch trailer</p>
                              </button>
                            </div>
                          </div>

                        </div>
                        <p className=' text-white text-[25px] font-bold '>Review</p>
                        <p className=' text-white text-[15px] '>
                          {items.overview}
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </>
            })}
          </div>
          : ""
      }

    </>
  )
}
