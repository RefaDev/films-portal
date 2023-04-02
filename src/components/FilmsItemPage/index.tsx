import FilmsPageItem from './components/FilmsItemDetail'

import './styles.css'

const FilmsItemPage = () => {
   return (
      <section className='films-item-detail'>
         <div className='container'>
            <div className='main-category'>
               <div className='main-category-items'>
                  <FilmsPageItem />
               </div>
            </div>
         </div>
      </section>
   )
}

export default FilmsItemPage
