
export async function dashboardLoader(id)  {
    const url = `http://localhost:3000/user/${id}`

    const user = await fetch(url)
        .then(res => { return res.json() })    

    const activity = await fetch(url+ "/activity")
        .then(res => { return res.json() })

    const sessions = await fetch(url+ "/average-sessions")
        .then(res => { return res.json() })

    const performance = await fetch(url+ "/performance")
        .then(res => { return res.json() })
    
        console.log(user)
    return [user, activity, sessions, performance]
}
