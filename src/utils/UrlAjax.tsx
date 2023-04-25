export class UrlAjax {
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

