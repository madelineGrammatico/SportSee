import React from 'react'
import styles from "./Performance.module.css"
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';


type data =
   { value: number, kind: number, kindString?: string }[]
type kind =  { [key: number]: string }

/**
 * Component for showing the performance chart
 * @param data the data of the performance
 * @return a chart with the details of the performance
 */
export function Performance({data}: {data: data}){
    const kindFrench: kind = {1: "Cardio", 2: "Energie", 3: "Endurance", 4:"Force", 5:"Vitesse", 6: "Intensité"}
    const formatedData = data.map((item) => {
        const newItem = {...item}
        newItem["kindString"]= kindFrench[newItem.kind]
        return newItem
      }) 
      console.log(formatedData)
      
    return(
        <article className={styles.Performance}>
            
            <ResponsiveContainer
                width="100%" 
                aspect={1}
                height="100%"
                className={styles["Performance__chart"]}
            >
                <RadarChart 
                    cx="50%"
                    cy="50%" 
                    outerRadius="65%" 
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