import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelectore } from '../../hooks/Hooks'
import { getData } from '../../store/actions'

export const Popular = () => {
    const {popular, error, loanding} = useAppSelectore(state => state.popularReducer)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getData())
    }, [])
  return (
    <div>
       { popular.length ? 
        popular.map(items => {
            return <>
                <p>{items.title}</p>
            </>
        })
       : <h1 className='text-center text-black'>{error}</h1> }
    </div>
  )
}
