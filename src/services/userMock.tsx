import { ActivityType, PerformanceType, SessionsType, UserType } from "../loaders/dashboardLoader"
import userData from "../mocks/User__mock.json"
import  activityData from "../mocks/Activity__mocks.json"
import sessionsData from "../mocks/Sessions__mock.json"
import performanceData from "../mocks/Performance__mocks.json"

export function UserMock() {

    async function getUser(id: number){
        const data = userData.filter((user) => user.id === id )
        return data[0]
    }

    async function getActivity(id: number) {
        const data = activityData.filter((activity) => activity.userId === id )
        console.log(data[0])
        return data[0]
        
    }


    async function getSessions(id: number) {
        const data = sessionsData.filter((session) => session.userId === id )
        return data[0]
    }



    async function getPerformance(id: number) {
        const data = performanceData.filter((performance) => performance.userId === id )
        return data[0] 
    }


    return {
        getUser,
        getActivity,
        getSessions,
        getPerformance
    }
}