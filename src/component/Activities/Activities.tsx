import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import styles from './Activities.module.css'
type Props = {
    sessions: { day: number, sessionLength: number }[]
}
export const Activities= ({sessions}: Props) => {
    console.log(sessions[0])
    return (
        <section className={styles.Activities}>
        <ResponsiveContainer width="100%" 
            aspect={3}
        >
        <BarChart
            width={500}
            height={300}
            data={sessions}
            margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
            }}
        >
            
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="kilogram" fill="#282D30" />
            <Bar dataKey="calories" fill="#E60000" />
        </BarChart>
        </ResponsiveContainer>
    
        </section>
    ) 
}