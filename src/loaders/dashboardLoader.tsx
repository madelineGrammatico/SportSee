import { redirect } from "react-router-dom"
import { UserApi } from "../services/userApi"
// import { UserMock } from "../services/userMock"

export type UserType = {
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
        day: string, 
        kilogram: number,
        calories: number,
    }[]
}

export type SessionsType = {
    userId: number,
    sessions: {
        day: number, 
        sessionLength: number
    }[]
}

export type PerformanceType = {
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
/**
 * function to retrieve user infos or redirect to 500 page 
 * @param {number} id userId
 * @returns user, activity, sessions, performance or redirect to 500 page
 */
export async function dashboardLoader(id: number): Promise<dashboardData | Response>  {
    try {
        const {
            getUser, 
            getActivity, 
            getPerformance, 
            getSessions
        } = UserApi()

        const user = await getUser(id)

        const activity = await getActivity(id)

        const sessions = await getSessions(id)

        const performance = await getPerformance(id)
    
        return { user, activity, sessions, performance }
    }
    catch {
        return redirect("/500") 
    }

    // const {
    //     getUser, 
    //     getActivity, 
    //     getPerformance, 
    //     getSessions
    // } = UserMock()

    // const user = await getUser(id)
    // console.log(user)

    // const activity = await getActivity(id)

    // const sessions = await getSessions(id)

    // const performance = await getPerformance(id)

    // return {
    //      user, 
    //      activity, 
    //      sessions, 
    //      performance 
    //     }
}

