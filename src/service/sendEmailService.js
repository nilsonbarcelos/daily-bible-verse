import Queue from "../lib/Queue"


export async function sendBibleVerse(userListCache){
    const queueName = process.env.QUEUE_EMAIL_SENDER
    userListCache.forEach(async item => {
        const register = JSON.parse(item)
        const user = {
            name: register.name,
            email: register.email
        }
        console.log(`Add user ${user} to be processed`)
        await Queue.add(queueName, { user })
    })
}