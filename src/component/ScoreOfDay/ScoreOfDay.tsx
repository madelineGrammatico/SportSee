import styles from './ScoreOfDay.module.css'
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer, PolarAngleAxis } from 'recharts'
import { UserType } from '../../loaders/dashboardLoader'

type Props = {
    user :{
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
        carbohydrateCount: number,
        lipidCount: number
    }
}}
export function ScoreOfDay({user}: Props) {
    return (
        <article className={styles.ScoreOfDay}>
             <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart 
                    innerRadius="70%" 
                    barSize={10} 
                    data={[user]}
                    startAngle={-45}
                    endAngle={225}
                >
                       
                <RadialBar
                    dataKey="todayScore"
                    fill="#E60000"
                    cornerRadius={30/2}
                />
                </RadialBarChart>
            </ResponsiveContainer>
        </article>
    )
}