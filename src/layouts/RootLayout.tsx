import React from 'react'
import { Outlet } from 'react-router-dom'
import { VertcalNavBar } from '../component/VertcalNavBar.jsx'

export default function RootLayout() {
  return (
    <>
    <VertcalNavBar/>
    
    <Outlet/>
    </>
  )
}
