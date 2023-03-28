import style from './Sessions.module.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

type Props = {
    sessions: {
        day: number, 
        sessionLength: number
        }[]
}
export function Sessions({sessions}: Props) {
    console.log(sessions)
    return(
        <article className={style.Sessions}>
             <ResponsiveContainer width="100%" aspect={1}>
             <LineChart
          width={500}
          height={300}
          data={sessions}
          margin={{
            top: 20,
            right: 20,
            left: 20,
            bottom: 20,
          }}
        >
          <XAxis dataKey="day" tickLine={false} axisLine={false}/>
          <Tooltip />
          <Line type="monotone" dot={false} dataKey="sessionLength" stroke="#FFFFFF" strokeWidth={2} activeDot={{ r: 8 }} />
          
        </LineChart>
      </ResponsiveContainer>
        </article>
    )
}