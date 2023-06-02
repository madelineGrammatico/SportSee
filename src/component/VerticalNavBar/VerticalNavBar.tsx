import React from 'react'
import yoga from '../../assets/icone/yoga.svg'
import swim from '../../assets/icone/swim.svg'
import bike from '../../assets/icone/bike.svg'
import bodyBulding from '../../assets/icone/bodyBulding.svg'

import { 
    NavLink,
    //  useParams 
} from 'react-router-dom'

import styles from './VerticalNavBar.module.css'
import { Vignette } from '../Vignettes/Vignette'

/**
 * Component for showing a vertical bar
 * @return a vertical bar with the navigation
 */
export function VerticalNavBar() {
    // const {id} = useParams()
    const links = [
        { name: "yoga", path:`#`, icone: yoga },
        { name: "nage", path:`#`, icone:swim },
        { name: "vélo", path:`#`, icone:bike },
        { name: "muscu", path:`#`, icone: bodyBulding }
    ]
    

  return (
    <header className={styles.VerticalNavBar}>
    
        <nav className={styles["NavBar--vertical"]}>
            {
                links.map((link, index) => 
                    // <NavLink 
                    //     className = { styles["NavLink--vertical"] }
                    //     to={link.path} 
                    //     key={index}
                    // >
                    //     <img 
                    //         src={link.icone}
                    //         alt={link.name}
                    //     />
                    // </NavLink>
                    <Vignette icon={link.icone} key={index}/>
                )
            }
        </nav>
        <p className={styles["NavBar__copiryght"]}>Copiryght, SportSee 2020</p>
    </header>
  )
}
