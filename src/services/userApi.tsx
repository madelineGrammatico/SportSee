import { urlAjax } from "../utils/UrlAjax";

export function UserApi() {
    
    urlAjax.setEndPoint("user")

    async function getUser(id: number) {
        return urlAjax.get(`/${id}`)
    }

    async function getActivity(id: number) {
        return urlAjax.get(`/${id}/activity`)
    }

    async function getSessions(id: number) {
        return urlAjax.get(`/${id}/average-sessions`)
    }

    async function getPerformance(id: number) {
        return urlAjax.get(`/${id}/performance`)
    }
    
    return {
        getUser,
        getActivity,
        getSessions,
        getPerformance
    }
}