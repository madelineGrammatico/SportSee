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
    // const valueScore : number = 1
    const valueString : string = (user.todayScore) ? "todayScore" : "score"
    const startAngle : number = 225
    const endChart : number= -135
    const endAngle : number = startAngle - (startAngle + (-endChart)) * (valueScore)

    return (
        <article className={styles.ScoreOfDay}>
            <h2 className={styles["ScoreOfDay__title"]}>score</h2>
            <ResponsiveContainer 
                width="100%" 
                height="100%"
                className={styles["ScoreOfDay__chart"]}
            >
                <RadialBarChart 
                    innerRadius="65%" 
                    barSize={10} 
                    data={[user]}
                    startAngle={startAngle}
                    endAngle= {endAngle}
                    
                >
                    
                <RadialBar
                    dataKey={valueString}
                    fill="#E60000"
                    cornerRadius={30/2}
                    background
                    
                />
                </RadialBarChart>
            </ResponsiveContainer>
            <p className={styles["ScoreOfDay__description"]}>
                <span className={styles["ScoreOfDay__score"]}>{valueScore*100 + "%"}</span>
                de votre objectif
            </p>
        </article>
    )
}