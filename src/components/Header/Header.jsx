import React from 'react'

import Logo from '../assets/Logo.png'

import classes from './Header.module.scss'

const Header = () => {
  return (
    <div className={classes.header}>
      <img src={Logo} alt="Fly" />
    </div>
  )
}
export default Header
