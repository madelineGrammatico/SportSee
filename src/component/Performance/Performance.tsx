import style from "./Performance.module.css"
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';


type data ={
    data: { value: number, kind: number }[]
}
type kind = {
    kind: { [key: number]: string }
}

export function Performance({data, kind}: {data: data, kind: kind}){
    console.log(kind)
    return(
        <article className={style.Performance}>
            <ResponsiveContainer width="100%" aspect={1}>
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="kind" />
                    
                    <Radar dataKey="value" stroke="#FFFFFF" fill="#E60000" fillOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer>
        </article>
    )
}