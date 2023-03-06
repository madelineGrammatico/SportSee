import React from 'react'
import { Outlet } from 'react-router-dom'

export default function RootLayout() {
  return (
    <>
    <p>SportSee</p>
    <Outlet/>
    </>
  )
}