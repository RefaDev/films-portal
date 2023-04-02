import React,{useRef, useEffect} from 'react'

import { NavLink } from 'react-router-dom'
import logo from 'assets/images/Logo.png'
import './styles.css'
import { useState } from 'react'
import BurgerClose from 'components/Burger/Burger'
const Header = () => {
  const [burgerOpen, SetBurgerOpen] = useState(false)
	

  const closeBurger = () => {
    SetBurgerOpen(false)
  }

	

  return (
    <header className='header'>
      <div className='container'>
        <div className='header-content'>
          <div className='header-logo'>
            <NavLink to='/'>
              <img src={logo} alt='logo' />
            </NavLink>
          </div>
          <nav className='header-nav'>
            <ul>
              <li>
                <NavLink to='/' activeClassName='linkActive'>
                  Главная
                </NavLink>
              </li>
              <li>
                <NavLink to='/categories' activeClassName='linkActive'>
                  Фильмы по категориям
                </NavLink>
              </li>
              <li>
                <NavLink to='/about' activeClassName='linkActive'>
                  О нас
                </NavLink>
              </li>
              <li>
                <NavLink to='/search' activeClassName='linkActive'>
                  Поиск
                </NavLink>
              </li>
            </ul>
          </nav>
          {burgerOpen && (
            <nav className='header-nav_burger'>
              <ul>
                <li>
                  <NavLink
                    to='/'
                    activeClassName='linkActive'
                    onClick={closeBurger}
                  >
                    Главная
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/categories'
                    activeClassName='linkActive'
                    onClick={closeBurger}
                  >
                    Фильмы по категориям
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/about'
                    activeClassName='linkActive'
                    onClick={closeBurger}
                  >
                    О нас
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/search'
                    activeClassName='linkActive'
                    onClick={closeBurger}
                  >
                    Поиск
                  </NavLink>
                </li>
              </ul>
            </nav>
          )}
          <BurgerClose open={burgerOpen} setBurgerOpen={SetBurgerOpen} />
        </div>
      </div>
    </header>
  )
}

export default Header
