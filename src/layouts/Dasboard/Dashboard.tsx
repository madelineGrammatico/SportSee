import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { Activities } from '../../component/Activities/Activities'

import styles from './Dashboard.module.css'

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
  sessions: {
    day: Date, 
    kilogram: number,
    calories: number,
  }[]
}

interface Sessions {
  userId: number,
  sessions: {
    day: number, 
    sessionsLength: number
  }[]
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
   <main className={styles.Dashboard}>
      <header>
        <h1>Bonjour <span>{user.userInfos.firstName}</span></h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </header>
      <section className={styles.ChartsBoard}>
        <Activities sessions={activity.sessions}/>
        <div style={{background:"red", color: "white"}}>durée sessions</div>
        <div style={{background:"black" , color: "white"}}>objectif journalier</div>
        <div>nutrition</div>
      </section>
   </main>
  )
}
