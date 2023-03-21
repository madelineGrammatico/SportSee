import { NavLink, useParams } from 'react-router-dom'

import styles from './HorizontalNavBar.module.css'

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