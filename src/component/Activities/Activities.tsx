import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// import styles from './Activities.module.css'

export default class Activities extends PureComponent {
   constructor(props: any, sessions: any) {
    super(props)
    console.log(sessions)
   }
   render(){
    return (
        <ResponsiveContainer width="100%" height="100%">
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
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="poid (kg)" fill="#282D30" />
            <Bar dataKey="Calories Brulées(kCal)" fill="#E60000" />
        </BarChart>
        </ResponsiveContainer>
    );
     }
}