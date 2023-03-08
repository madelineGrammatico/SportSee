import React from 'react'
import { useLoaderData } from 'react-router-dom'

export function Dashboard() {
    const { user, activity, session, performance }= useLoaderData()
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
