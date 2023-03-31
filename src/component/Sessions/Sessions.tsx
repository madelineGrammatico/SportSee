import style from './Sessions.module.css'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

type Props = {
    sessions: {
        day: number, 
        sessionLength: number,
        nameDay?: string
        }[]
}
export function Sessions({sessions}: Props) {
    console.log(sessions)
    const arrayDay = ["L", "M", "M", "J", "V", "S", "D"]
    const formatedData = sessions.map((data, index) => {
      data["nameDay"]= arrayDay[index % 7]
      console.log(arrayDay[index], index % 7)
      return data
    })
    console.log(formatedData)
    const CustomToolTip = (props: any) => {
      const {active, payload} = props
      if(active && payload && payload.length) {
        return( 
          <div style={{
            backgroundColor:"rgba(0, 0, 0, 0.1)", 
            border:0,
            height: "500px",
            minWidth: "500px",
            position:"relative",
            left:-10
          }}></div>
        )
      }
      return(
        <></>
      )
    }
    return(
        <article className={style.Sessions}>
          <ResponsiveContainer width="100%" aspect={1}>
          <AreaChart
            data={formatedData}
            margin={{
              top: 20,
              right: 0,
              left: 0,
              bottom: 20,
            }}
          >
          <XAxis 
            dataKey="nameDay" 
            tickLine={false} 
            axisLine={false}
            tickSize={15}
            allowDataOverflow={false}
            stroke={"rgba(255, 255, 255, 0.5)"}
          />
          <Tooltip 
            content={<CustomToolTip />}
            position={{y:0}}
            contentStyle={{border:0}}
            allowEscapeViewBox={{x: true, y:true}}
            isAnimationActive={false}
            cursor={false}
          />
          <Area 
            type="monotone"
            dot={false} 
            dataKey="sessionLength"
            stroke="#FFFFFF"
            strokeWidth={2}
            activeDot={{ r: 8 }}
            fillOpacity={0.1}
            baseValue={-20}
          />
        </AreaChart>
      </ResponsiveContainer>
        </article>
    )
}