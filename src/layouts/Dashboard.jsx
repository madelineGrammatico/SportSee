import React from 'react'
import { useLoaderData } from 'react-router-dom'

export function Dashboard() {
    const data = useLoaderData()
    const user = data[0].data
    const activity = data[1].data
    const session = data[2].data
    const performance = data[3].data
    console.log("user", user)
    console.log("activity", activity)
    console.log("session", session)
    console.log("performance", performance)
    

  return (
   <main>
    <h1>Bonjour <span>{user.userInfos.firstName}</span> </h1>
   </main>
  )
}
