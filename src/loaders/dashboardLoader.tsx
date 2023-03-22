
type UserType = {
    id: number,
    userInfos: {
    firstName: string,
    lastName: string,
    age: number
    },
    todayScore: number,
    keyData: {
    calorieCount: number,
    proteinCount: number,
    carbohydrateCount: number,
    lipidCount: number
    }
}
 export type ActivityType = {
    userId: number,
    sessions: {
    day: number, 
    kilogram: number,
    calories: number,
    }[]
}

type SessionsType = {
    userId: number,
    sessions: {
    day: number, 
    sessionsLength: number
    }[]
}

type PerformanceType = {
    userId: number,
    data: { value: number, kind: number }[]
    kind: { [key: number]: string }, 

}
export type dashboardData = {
    user: UserType,
    activity: ActivityType,
    sessions: SessionsType,
    performance: PerformanceType

}
export async function dashboardLoader(id: number): Promise<dashboardData>  {
    const url = `http://localhost:3000/user/${id}`

    const user = await fetch(url)
        .then( async (res) => { const {data} = await res.json()
        return data })    

    const activity = await fetch(url+ "/activity")
        .then( async (res) => { const {data} = await res.json()
        return data })

    const sessions = await fetch(url+ "/average-sessions")
        .then( async (res) => { const {data} = await res.json()
        return data })

    const performance = await fetch(url+ "/performance")
        .then( async (res) => { const {data} = await res.json()
        return data })
    
    return { user, activity, sessions, performance }
}
