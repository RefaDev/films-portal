import React from 'react'

import './styles.css'
interface IBurger {
  open: boolean
  setBurgerOpen: (arg0: boolean) => void
}

const BurgerClose: React.FC<IBurger> = ({ open, setBurgerOpen }) => {
  const addOpen = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.classList.toggle('open')
    if (e.currentTarget.classList.value === 'open') {
      setBurgerOpen(true)
    } else {
      setBurgerOpen(false)
    }
  }
  return (
    <div id='nav-icon1' onClick={addOpen} className={open ? 'open' : ''}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

export default BurgerClose
