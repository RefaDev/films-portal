import routeToFilmInfo from 'components/FilmsItemPage/routes'
import React from 'react'
import { NavLink } from 'react-router-dom'
import './styles.css'

export interface IMainBlockInfoItemParams {
   id?: number
   img?: string
   name?: string
   year?: string
   countryCode?: string
   genre?: string
}

const MainInfoItem: React.FC<IMainBlockInfoItemParams> = ({
   id,
   img,
   name,
   year,
   countryCode,
   genre,
}) => {
   return (
      <NavLink to={routeToFilmInfo(id?.toString())} className='main-block-item'>
         <div className='main-block-item-img'>
            <img src={img} alt={name} />
         </div>
         <div className='main-block-item-img-descr'>
            <p className='main-block-item-img-descr-title'>{name}</p>
            <p className='main-block-item-img-descr-year'>
               {year} ({countryCode})
            </p>
            <p className='main-block-item-img-descr-genre'>{genre}</p>
         </div>
      </NavLink>
   )
}

export default MainInfoItem
