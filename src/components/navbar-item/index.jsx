import React from 'react'
import styles from './navbar-item.module.scss';
import { NavLink } from 'react-router-dom';

export const NavbarLink = ({to, tabName}) => {
  return (
    <li key={to} className={styles.container}>
      <NavLink className={styles.link} activeClassName={[styles.link, styles.active].join(' ')} to={to}>
        {tabName}
      </NavLink>
    </li>
  )
}
