import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip,  CartesianGrid, ResponsiveContainer } from 'recharts';
import styles from './Activities.module.css';
import { Payload } from 'recharts/types/component/DefaultLegendContent';


type Props = {
    sessions: { day: string, kilogram: number, calories: number, id?: number }[]
}

/**
 * Component for showing the activity chart
 * @typeParam Props
 * @param sessions the data of the sessions
 * @return a chart with the details of the activity
 */
export const Activities= ({sessions}: Props) => {
    const dataFormated = sessions.map((data, index)=> {
        const newItem= {...data}
        newItem["id"]= index + 1
        return newItem
    })

    let minValueKg : number = dataFormated[0].kilogram
    dataFormated.map((data)=> {
        (minValueKg > data.kilogram) ? minValueKg = data.kilogram : null
    })
    const CustomTooltip = (props: any) => 
        
        {
            const{ active, payload} = props
            if (active && payload && payload.length) {
            return (
                <div className="custom-tooltip">
                    <p>{payload[0].value}kg</p>
                    <p>{payload[1].value}Kcal</p>
                </div>
            )}
            return(
                <></>
            )
        }

    return (
        <section className={styles.Activities}>
        <div className={styles["Activities__legend"]}>
            <h2 className={styles["Activities__title"]}>Activité quotidienne</h2>
                <div className={styles["legend__wrapper"]}>
                <span className={styles["legend__color"]} style={{backgroundColor: "#000000"}}></span><p className={styles["legend__legend"]}>Poids (kg)</p>
                <span className={styles["legend__color"]} style={{backgroundColor: "#E60000"}}></span><p className={styles["legend__legend"]}>Calories Brulées (kCal)</p>
            </div>
        </div>
        <ResponsiveContainer width="100%" 
            aspect={4.5}
        >
        <BarChart
            data={dataFormated}
            margin={{
                top: 30,
                bottom: 5,
            }}
            barGap={12}
            
        >
        <CartesianGrid
            vertical={false}
            strokeDasharray={"1 3"}

        />
        <XAxis 
            dataKey="id" 
            tickLine={false} 
            axisLine={false}
        />
        <YAxis 
            domain={[0,'auto']}  
            hide={true} 
            yAxisId="calories" 
            tickLine={false} 
            axisLine={false}
        /> 
        <YAxis 
            orientation='right' 
            domain={[minValueKg -1, 'auto']} 
            yAxisId="kilogram" 
            dataKey="kilogram" 
            tickLine={false} 
            axisLine={false}
        />   
           
        <Tooltip 
            wrapperStyle={{
                border: 0,
                background: "#E60000",
                padding: "20px",
                color: "#FFFFFF"

            }}
            // contentStyle={{
            //     background: "#E60000",
            //     color: "#FFFFFF",
            //     border: 0
            // }}
            itemStyle={{
                color:"#FFFFFF",
                border: 0
            }}
            content={ <CustomTooltip/> }
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