import { UrlAjax } from "../utils/UrlAjax";

export function callData() {
    const urlAjax = new UrlAjax("http://localhost:3000/")

    async function getUser(id: number) {
    urlAjax.setEndPoint("user")
    return urlAjax.get(`/${id}`)
}
    async function getActivity(id: number) {
    return urlAjax.get(`/${id}/activity`)
}
    async function getSessions(id: number) {
    return urlAjax.get(`/${id}/activity`)
}
    async function getPerformance(id: number) {
    return urlAjax.get(`/${id}/activity`)
}
    return {
        getUser()
    }
}