import React,{useEffect} from 'react'
import { useAppDispatch, useAppSelectore } from '../../hooks/Hooks'
import { getMovieSeries } from '../../store/actions'


export const Genre = () => {
    const {error, seriece } = useAppSelectore(state => state.genreReducer)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getMovieSeries())
    },[])
  return (
    <div>Genre</div>
  )
}
