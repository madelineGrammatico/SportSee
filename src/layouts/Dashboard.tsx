import React from 'react'
import { useLoaderData } from 'react-router-dom'

interface User {
  id: number,
  userInfos: {
    firstName: string,
    lastName: string,
    age: number
  },
  todayScore: number,
  keyData: {
    calorieCount: number,
    proteinCount: number,
    carbohydrateCount: number
  }
}
interface Activity {
  userId: number,
  sessions: (number| string)[]
}

interface Sessions {
  userId: number,
  sessions: [
    day: number, 
    sessionsLength: number
  ]
}

interface Performance {
  userId: number,
  data: { value: number, kind: number }[]
  kind: { [key: number]: string }, 

}
export function Dashboard() {
    const { user, activity, sessions, performance }: any = useLoaderData()

    console.log("user", user)
    console.log("activity", activity)
    console.log("sessions", sessions)
    console.log("performance", performance)
    

  return (
   <main>
    <h1>Bonjour <span>{user.userInfos.firstName}</span></h1>
   </main>
  )
}
