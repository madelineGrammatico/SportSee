import styles from './ScoreOfDay.module.css'
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer, PolarAngleAxis , } from 'recharts'
import { UserType } from '../../loaders/dashboardLoader'

type Props = {
    user :{
        id: number,
        userInfos: {
        firstName: string,
        lastName: string,
        age: number
        },
        todayScore?: number,
        score?: number,
        keyData: {
        calorieCount: number,
        proteinCount: number,
        carbohydrateCount: number,
        lipidCount: number
    }
}}
export function ScoreOfDay({user}: Props) {
    const valueScore = (user.todayScore) ? user.todayScore : ((user.score) ? user.score: 0)
    const valueString = (user.todayScore) ? "todayScore" : "score"
    console.log(225-270)
    return (
        <article className={styles.ScoreOfDay}>
             <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart 
                    innerRadius="70%" 
                    barSize={10} 
                    data={[user]}
                    startAngle={225}
                    endAngle= {225-270*(valueScore)}
                >
                       
                <RadialBar
                    dataKey={valueString}
                    fill="#E60000"
                    cornerRadius={30/2}
                />
                </RadialBarChart>
            </ResponsiveContainer>
        </article>
    )
}