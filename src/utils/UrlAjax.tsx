/**
 * 
 */
class UrlAjax {
    /**
     * constructor of UrlAjax class
     * @param url 
     * @param endpoint 
     */
    constructor (
        private url: string,
        private endpoint: string = ""
     ) {}
    async setEndPoint(endpoint: string) {
        this.endpoint = endpoint
    }

    async get(url?: string) {
        return await fetch(this.url + this.endpoint + url)
        .then( async (res)=> {const {data} = await res.json()
            return data
        })
    }
}
export const urlAjax = new UrlAjax("http://localhost:3000/")
