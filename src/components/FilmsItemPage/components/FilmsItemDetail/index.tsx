import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import cutTegs from 'utils/cutTegs'
import prepareCountry from 'utils/prepareCountry'
import prepareDate from 'utils/prepareDate'
import prepareGenre from 'utils/prepareGenre'
import preparePicture from 'utils/preparePicture'
import prepareRating from 'utils/prepareRating'
import prepareSummary from 'utils/prepareSumary'

import { useDispatch, useSelector } from 'react-redux'
import { loadFilmsItem } from 'store/FilmsDetail.ts/actions'
import { selectFilmsItem } from 'store/FilmsDetail.ts/selectors'

import imageStar from 'assets/images/star.png'

import { ID } from 'types/ID'

import './styles.css'

const FilmsPageItem = () => {
   const { id } = useParams<ID>()
   const dispatch = useDispatch()
   const film = useSelector(selectFilmsItem)

   useEffect(() => {
      // @ts-ignore
      dispatch(loadFilmsItem(`/${id}`))
   }, [id, dispatch])
   return (
      <div className='films-item'>
         {film ? (
            <div className='films-item-content'>
               <img src={preparePicture(film.image?.medium)} alt={film.name} />
               <div className='content-wrapper'>
                  <div className='right-block-top top'>
                     <div className='top-name'>
                        <p className='top-title'>{film.name}</p>
                     </div>
                     <div className='top-range'>
                        <img src={imageStar} alt='star' />
                        <p>{prepareRating(film.rating?.average?.toString())}/10</p>
                     </div>
                  </div>
                  <div className='right-block-bottom bottom'>
                     <div className='bottom-descr'>
                        <p className='bottom-year'>
                           <span className='left-span'>Год:</span>
                           <span className='right-span'> {prepareDate(film.premiered)}</span>
                        </p>
                        <p className='bottom-country'>
                           <span className='left-span'>Страна:</span>{' '}
                           <span className='right-span'>
                              {prepareCountry(film.network?.country?.name)}
                           </span>
                        </p>
                        <p className='bottom-genre'>
                           <span className='left-span'>Жанр:</span>{' '}
                           <span className='right-span'>
                              {prepareGenre(film.genres?.join(', '))}
                           </span>
                        </p>
                        <p className='bottom-descriptoin'>
                           <span className='left-span'>Описание:</span>{' '}
                           <span>{prepareSummary(cutTegs(film.summary))}</span>
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         ) : (
            <>нет ответа</>
         )}
      </div>
   )
}

export default FilmsPageItem
{
   /* {film ? (
            <div className='films-item-item'>
               <div className='left-block'>
                  <div className='FilmsItemPage-item-img'>
                     <img src={preparePicture(film.image?.medium)} alt={film.name} />
                  </div>
               </div>
               <div className='right-block'>
                  <div className='right-block-top'>
                     <div className='right-block-top-name'>
                        <p className='FilmsItemPage-item-descr-title'>{film.name}</p>
                     </div>
                     <div className='right-block-top-range'>
                        <img src={imageStar} alt='star' />
                        <p>{prepareRating(film.rating?.average?.toString())}/10</p>
                     </div>
                  </div>
                  <div className='right-block-bottom'>
                     <div className='right-block-bottom-left'>
                        <div className='FilmsItemPage-item-descr'>
                           <p className='FilmsItemPage-item-descr-year'>Год:</p>
                           <p className='FilmsItemPage-item-descr-country'>Страна:</p>
                           <p className='FilmsItemPage-item-descr-genre'>Жанр:</p>
                           <p className='FilmsItemPage-item-descr-descriptoin'>Описание:</p>
                        </div>
                     </div>
                     <div className='right-block-bottom-right'>
                        <div className='FilmsItemPage-item-descr-right'>
                           <p className='FilmsItemPage-item-descr-year-right'>
                              {prepareDate(film.premiered)}
                           </p>
                           <p className='FilmsItemPage-item-descr-country-right'>
                              {prepareCountry(film.network?.country?.name)}
                           </p>
                           <p className='FilmsItemPage-item-descr-genre-right'>
                              {prepareGenre(film.genres?.join(', '))}
                           </p>
                           <p className='FilmsItemPage-item-descr-descriptoin-right'>
                              {prepareSummary(cutTegs(film.summary))}
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         ) : (
            <>нет ответа</>
         )} */
}
