import { useLoaderData } from 'react-router-dom'
import { Activities } from '../../component/Activities/Activities'

import styles from './Dashboard.module.css'
import { dashboardData } from '../../loaders/dashboardLoader'

export function Dashboard() {
    const { user, activity, sessions, performance }= useLoaderData() as dashboardData

    // console.log("user", user)
    // console.log("activity", activity)
    // console.log("sessions", sessions)
    // console.log("performance", performance)
    

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
