import React, {useEffect} from 'react'
import { useAppDispatch, useAppSelectore } from '../../hooks/Hooks'
import { getMovieSeries } from '../../store/actions'


export const Series = () => {
    const {series, error,} = useAppSelectore(state => state.seriesReducer)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getMovieSeries())
    }, [])
  return (
    <div>{
        series.map(items => {
            return <>

                <p>{items.name}
                    </p>
                </>
        })
    }</div>
  )
}
