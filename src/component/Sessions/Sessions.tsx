import styles from './Sessions.module.css'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { scaleLog } from 'd3-scale';

type Props = {
    sessions: {
        day: number, 
        sessionLength: number,
        nameDay?: string
        }[]
}
export function Sessions({sessions}: Props) {
  const arrayDay = ["L", "M", "M", "J", "V", "S", "D"]
  const formatedData = sessions.map((data, index) => {
    const newItem = {...data}
    newItem["nameDay"]= arrayDay[index % 7]
    return newItem
  })
    const CustomToolTip = (props: any) => {
      const {active, payload} = props
      if(active && payload && payload.length) {
        return( 
          <div style={{
            backgroundColor:"rgba(0, 0, 0, 0.1)", 
            border:0,
            height: "100%",
            width: "100%",
            position:"relative",
            left:-10,
            display: "flex",
            alignItems: "center",
          }}>
            <div style={{
              backgroundColor: "#FFFFFF",
              margin: "1rem",
            }}>
              <p>{payload[0].value}min</p>
            </div>
          </div>
        )
      }
      return(
        <></>
      )
    }
    return(
        <article className={styles.Sessions}>
          <h2 className={styles["Sessions__title"]}>Durée moyenne des sessions</h2>
          <ResponsiveContainer 
            width="100%" 
            aspect={1}
            className={styles["Sessions__chart"]}
          >
          <AreaChart
            data={formatedData}
            margin={{
              top: 20,
              right: 0,
              left: 0,
              bottom: 20,
            }}
            stackOffset='silhouette'
          >
          <XAxis 
            dataKey="nameDay" 
            tickLine={false} 
            axisLine={false}
            tickSize={15}
            allowDataOverflow={false}
            stroke={"rgba(255, 255, 255, 0.5)"}
            interval={"preserveStartEnd"}
          />
          <Tooltip 
            content={<CustomToolTip />}
            position={{y:0}}
            wrapperStyle={{
              border:0, 
              width: "100%",
              height: "100%",
            }}
            contentStyle={{
              border:0,
              width: "100%",
              height: "100%",
            }}
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