import React from 'react'
import MainInfo from 'components/MainInfo'
import './styles.css'
const Main = () => {
   return (
      <section className='main'>
         <div className='main-info-block'>
            <h1 className='main-info-block-title'>MOVIESinfo</h1>
            <p className='main-info-block-subtitle'>Самый популярный портал о фильмах </p>
         </div>
         <MainInfo />
      </section>
   )
}

export default Main
