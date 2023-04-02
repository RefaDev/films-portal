import MainInfoItem from './components/MainInfoItem'
import React, { useEffect } from 'react'

import prepareDate from 'utils/prepareDate'
import prepareCountry from 'utils/prepareCountry'
import preparePicture from 'utils/preparePicture'

import { useDispatch, useSelector } from 'react-redux'
import { loadFilmsMain } from 'store/FilmsMain/actions'
import { selectFilmsMain } from 'store/FilmsMain/selectors'

import './styles.css'

const MainInfo = () => {
   const dispatch = useDispatch()
   const filmList = useSelector(selectFilmsMain)

   useEffect(() => {
      // @ts-ignore
      dispatch(loadFilmsMain(`?q=girls`))
   }, [dispatch])
   return (
      <div className='main-block'>
         {filmList
            .map((film) => {
               return (
                  <MainInfoItem
                     key={film.show.id}
                     id={film.show.id}
                     img={preparePicture(film.show.image?.medium)}
                     name={film.show.name}
                     year={prepareDate(film.show.premiered)}
                     countryCode={prepareCountry(film.show.network?.country?.name)}
                     genre={film.show.genres?.join(', ')}
                  />
               )
            })
            .slice(0, 8)}
      </div>
   )
}

export default MainInfo
