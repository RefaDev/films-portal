import { scrollTop } from 'utils/scrollTop'
import './styles.css'
import arrowTop from 'assets/images/arrow.svg'

const ScrollTopBtn = () => {
   return (
      <button className='scroll-top' onClick={scrollTop}>
         <img src={arrowTop} alt='arrow-top' />
      </button>
   )
}

export default ScrollTopBtn
