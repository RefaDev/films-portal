import routeToFilmInfo from 'components/FilmsItemPage/routes'
import React from 'react'
import { NavLink } from 'react-router-dom'
import './styles.css'

import { IMainBlockInfoItemParams } from 'components/MainInfo/components/MainInfoItem'

const CategoriesInfoItem: React.FC<IMainBlockInfoItemParams> = ({ id, img, name, genre }) => {
   return (
      <NavLink to={routeToFilmInfo(id?.toString())} className='categories-info'>
         <div className='categories-info-img'>
            <img src={img} alt={name} />
         </div>
         <div className='categories-info-item-descr'>
            <p className='categories-info-title'>{name}</p>
            <p className='categories-info-genre'>{genre}</p>
         </div>
      </NavLink>
   )
}

export default CategoriesInfoItem
