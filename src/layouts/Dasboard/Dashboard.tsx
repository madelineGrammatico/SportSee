import { useLoaderData } from 'react-router-dom'
import { Activities } from '../../component/Activities/Activities'
import { Performance} from '../../component/Performance/Performance'

import styles from './Dashboard.module.css'
import { dashboardData } from '../../loaders/dashboardLoader'
import { Sessions } from '../../component/Sessions/Sessions'
import { ScoreOfDay } from '../../component/ScoreOfDay/ScoreOfDay'
import { Nutrition } from '../../component/Nutrition/Nutrition'

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
        <Sessions sessions={sessions.sessions}/>
        <Performance data={performance.data} kind={performance.kind}/>
        <ScoreOfDay user={user}/>
        <Nutrition keyData={user.keyData}/>
      </section>
   </main>
  )
}
