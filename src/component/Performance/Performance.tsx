import style from "./Performance.module.css"
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';


type data =
   { value: number, kind: number, kindString?: string }[]
type kind =  { [key: number]: string }

export function Performance({data}: {data: data}){
    const kindFrench: kind = {1: "Cardio", 2: "Energie", 3: "Endurance", 4:"Force", 5:"Vitesse", 6: "Intensité"}
    const formatedData = data.map((item) => {
        const newItem = {...item}
        newItem["kindString"]= kindFrench[newItem.kind]
        return newItem
      }) 
      console.log(formatedData)
      
    return(
        <article className={style.Performance}>
            <ResponsiveContainer width="100%" aspect={1}>
                <RadarChart 
                    cx="50%"
                    cy="50%" 
                    outerRadius="70%" 
                    data={formatedData.reverse()}
                >
                    <PolarGrid 
                        radialLines={false}
                    />
                    <PolarAngleAxis 
                        dataKey="kindString" 
                        stroke="#FFFFFF"
                        tickLine={false}
                        axisLine={false}
                        tickSize={20}
                    />
                    
                    <Radar 
                        dataKey="value" 
                        fill="#E60000" 
                        fillOpacity={0.6} 
                    />
                </RadarChart>
            </ResponsiveContainer>
        </article>
    )
}