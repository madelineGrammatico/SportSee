import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { DefaultTooltipContent } from 'recharts/types/component/DefaultTooltipContent';

import styles from './Activities.module.css'
type Props = {
    sessions: { day: number, kilogram: number, calories: number, id?: number }[]
}
export const Activities= ({sessions}: Props) => {
    const dataFormated = sessions.map((data, index)=> {
        data["id"]= index + 1
        return data
    })
    console.log(dataFormated)
    {console.log(Tooltip)}
    return (
        <section className={styles.Activities}>
        <ResponsiveContainer width="100%" 
            aspect={3.5}
        >
        <BarChart
            data={dataFormated}
            margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
            }}
            barGap={10}
            
        >
            
        <XAxis 
            dataKey="id" 
            tickLine={false} 
            axisLine={false}
        />
        <YAxis 
            domain={[0,'auto']}  
            hide={true} yAxisId="calories" 
            tickLine={false} 
            axisLine={false}
        /> 
        <YAxis 
            orientation='right' 
            domain={[75, 'auto']} 
            yAxisId="kilogram" 
            dataKey="kilogram" 
            tickLine={false} 
            axisLine={false}
        />   
           
        <Tooltip 
            wrapperStyle={{
                border: "1px solid #E60000"
            }}
            contentStyle={{
                background: "#E60000",
                color: "#FFFFFF",
                border: "1px solid #E60000"
            }
            // labelStyle={{
            //     color:"#FFFFFF"
            // }}
            // itemStyle={{
            //     color:"#FFFFFF"
            // }}
            // defaultProps.itemStyle
        }
        />
        <Bar 
            dataKey="kilogram" 
            fill="#282D30" 
            yAxisId="kilogram" 
            radius={[20,20,0,0]} 
            barSize={10}
        />
        <Bar 
            dataKey="calories" 
            fill="#E60000"
            yAxisId="calories"
            radius={[20,20,0,0]} 
            barSize={10}
            />
        </BarChart>
        </ResponsiveContainer>
    
        </section>
    ) 
}