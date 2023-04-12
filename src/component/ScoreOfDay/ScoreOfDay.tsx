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
    const valueScore : number = (user.todayScore) ? user.todayScore : ((user.score) ? user.score: 0)
    const valueString : string = (user.todayScore) ? "todayScore" : "score"
    const startAngle : number = 225
    const endChart : number= -45
    const endAngle : number = startAngle - (startAngle + (-endChart)) * (valueScore)

    return (
        <article className={styles.ScoreOfDay}>
             <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart 
                    innerRadius="70%" 
                    barSize={10} 
                    data={[user]}
                    startAngle={startAngle}
                    endAngle= {endAngle}
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