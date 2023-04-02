import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { loadFilmsSearch } from 'store/FilmsMainSearch/actions'
import { selectFilmsSearch } from 'store/FilmsMainSearch/selectors'

import './styles.css'

import NotFound from 'components/NotFound'
import SearchDescription from 'components/SearchDescription'
import MainInfoItem from 'components/MainInfo/components/MainInfoItem'

import prepareDate from 'utils/prepareDate'
import prepareCountry from 'utils/prepareCountry'
import preparePicture from 'utils/preparePicture'
import prepareGenre from 'utils/prepareGenre'

const Search = () => {
   const dispatch = useDispatch()
   const filmList = useSelector(selectFilmsSearch)
   const [value, setValue] = useState('')
   useEffect(() => {
      // @ts-ignore
      dispatch(loadFilmsSearch(`?q=${value}`))
   }, [dispatch, value])

   const filterFilmsByName = filmList.filter((film) => {
      return film.show.name?.toLowerCase().includes(value.toLowerCase())
   })
   const filterResult = filterFilmsByName.map((film) => {
      return (
         <MainInfoItem
            key={film.show.id}
            id={film.show.id}
            img={preparePicture(film.show.image?.medium)}
            name={film.show.name}
            year={prepareDate(film.show.premiered)}
            countryCode={prepareCountry(film.show.network?.country?.name)}
            genre={prepareGenre(film.show.genres?.join(', '))}
         />
      )
   })

   return (
      <section className='search'>
         <div className='container'>
            <div className='search-content'>
               <div className='search-top'>
                  <h2 className='search-top-title'>Поиск по названию </h2>
                  <input
                     autoFocus
                     type='text'
                     className='search-top-input'
                     placeholder='Введите название фильма ...'
                     onChange={(event) => setValue(event.target.value)}
                  />
                  <p className='search-top-text'>Результаты поиска:</p>
               </div>
               <div className='search-bottom'>
                  {value ? (
                     filterResult.length > 0 ? (
                        filterResult
                     ) : (
                        <NotFound />
                     )
                  ) : (
                     <SearchDescription />
                  )}
               </div>
            </div>
         </div>
      </section>
   )
}

export default Search
