import React from 'react'
import { NavLink, useParams } from 'react-router-dom'

import styles from './VerticalNavBar.module.css'

export function VerticalNavBar() {
    const {id} = useParams()
    const links = [
        { name: "yoga", path:`#` },
        { name: "muscu", path:`#`}
    ]
    

  return (
    <header className={styles.VerticalNavBar}>
    
        <nav className={styles["NavBar--vertical"]}>
            {
                links.map((link, index) => 
                    <NavLink 
                        className = { styles["NavLink--vertical"] }
                        to={link.path} 
                        key={index}
                    >{link.name}</NavLink>
                )
            }
        </nav>
        
    </header>
  )
}
