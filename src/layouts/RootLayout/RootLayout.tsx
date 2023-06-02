import React from 'react'
import style from './RootLayout.module.css'
import { Outlet } from 'react-router-dom'
import { VerticalNavBar } from '../../component/VerticalNavBar/VerticalNavBar.js'
import { HorizontalNavBar } from '../../component/HorizontalNavBar/HorizontalNavBar'

export default function RootLayout() {
  return (
    <div className={style.RootLayout}>
    <HorizontalNavBar/>
    <VerticalNavBar/>
    <Outlet/>
    </div>
  )
}
