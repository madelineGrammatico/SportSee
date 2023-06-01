import { NavLink, useParams } from 'react-router-dom'
import React from 'react'
import styles from './HorizontalNavBar.module.css'

import run from '../../assets/icone/run.svg'

/**
 * Component for showing a horizontal bar
 * @return a horizontal bar with the navigation
 */
export function HorizontalNavBar() {
    const {id} = useParams()
    const links = [
        { name: "Accueil", path:`/` },
        { name: "Profil", path:`/profile/${id}`},
        { name: "Réglage", path:`/setting/${id}`},
        { name: "communauté", path:`/community/${id}`}
    ]
    

  return (
    <nav className={styles.HorizontalNavBar}>
        <span className={styles.Logo}>
            <div className={styles.Logo__icone}>
                <img src={run}/>
            </div>
            <p>SportSee</p>
        </span>
        {
            links.map((link, index) => 
                <NavLink 
                    className = { styles["NavLink--horizontal"] }
                    to={link.path} 
                    key={index}
                >{link.name}</NavLink>
            )
        }
    </nav>
  )
}