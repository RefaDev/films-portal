import React, { useEffect, useState } from 'react'

import './styles.css'
import preparePicture from 'utils/preparePicture'

import { useDispatch, useSelector } from 'react-redux'
import { loadFilmsCategries } from 'store/FilmsCategories/actions'
import { selectFilmsCategories } from 'store/FilmsCategories/selectors'
import CategoriesInfoItem from './components/CategoriesInfoItem'
import { getUniqueGenres } from 'utils/getUniqueGenres'

const CategoryInfo = () => {
   const dispatch = useDispatch()
   const filmList = useSelector(selectFilmsCategories)

   const genres = filmList.map((film) => {
      return film.genres?.join(', ')
   })

   const genresStr = genres.join(', ').split(', ').sort()

   const uniqueElems = getUniqueGenres(genresStr)

   const [value, setValue] = useState('Action')

   useEffect(() => {
      // @ts-ignore
      dispatch(loadFilmsCategries(`?q=${value}`))
   }, [dispatch, value])

   const filmsList = filmList
      .filter((el) => el.genres?.includes(value))
      .map((film) => {
         return (
            <CategoriesInfoItem
               id={film.id}
               key={film.id}
               img={preparePicture(film.image?.medium)}
               name={film.name}
               genre={film.genres?.join(', ')}
            />
         )
      })

   const filmListRender = uniqueElems.map((elem: any) => {
      if (elem === value) {
         {
            return filmsList
         }
      }
   })

   const uniqueElemsRender = uniqueElems.map((elem: string, index: number) => {
      return (
         <option className='info-option' value={elem} key={index}>
            {elem}
         </option>
      )
   })

   return (
      <div className='main-category'>
         <div className='main-category-info'>
            <label className='info-label'>Выбранная категория:</label>
            <select
               className='info-select'
               id='films'
               onChange={(e) => {
                  setValue(e.target.value)
               }}
            >
               {uniqueElemsRender}
            </select>
         </div>

         <div className='main-info-items'>{filmListRender}</div>
      </div>
   )
}

export default CategoryInfo
