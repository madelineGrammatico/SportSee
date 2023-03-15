import React from 'react'
import { NavLink, useParams } from 'react-router-dom'

export function VertcalNavBar() {
    const {id} = useParams()
    const links = [
        { name: "Accueil", path:`/` },
        { name: "Profil", path:`/profile/${id}`},
        { name: "Réglage", path:`/setting/${id}`},
        { name: "communauté", path:`/community/${id}`}
    ]
    

  return (
    <nav>
        <p>SportSee</p>
        {
            links.map((link, index) => 
                <NavLink 
                    to={link.path} 
                    key={index}
                >{link.name}</NavLink>
            )
        }
    </nav>
  )
}
