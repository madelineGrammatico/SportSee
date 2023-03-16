
export async function dashboardLoader(id: number)  {
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
    
        console.log(user)
    return { user, activity, sessions, performance }
}
