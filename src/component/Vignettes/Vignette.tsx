import React from 'react'
import styles from './Vignette.module.css'
// import fire from "../../assets/icone/Fire.svg"

type PropsVignette = {
    icon: string,
    color?: string
}

export function Vignette({icon, color= "#FFFFFF"} : PropsVignette) {
    return(
        <span className={styles.vignette} style={{background: color}}>
            <img src={icon} className={styles.icon}/>
        </span>
    )
}