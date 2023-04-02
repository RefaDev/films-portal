import { NavLink } from 'react-router-dom'
import logo from 'assets/images/Logo.png'

import './styles.css'

const Footer = () => {
   return (
      <footer className='footer'>
         <div className='container'>
            <div className='footer-content'>
               <div className='footer-logo'>
                  <NavLink to='/main'>
                     <img src={logo} alt='logo' />
                  </NavLink>
               </div>
               <span className='header-diploma'>Дипломный проект</span>
               <div className='footer-info'>
                  <span>Made by</span>
                  <p>Рефат Абдукаримов</p>
               </div>
            </div>
         </div>
      </footer>
   )
}

export default Footer
