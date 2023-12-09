import 'dotenv/config'
import { getRedisAsync } from "../src/redis"
import { sendBibleVerse } from "../src/service/sendEmailService"
import Queue from '../src/lib/Queue'

const cron = require('node-cron')

cron.schedule('* * * * *', async function(){
    console.log('Running a task every minute')
    
    var userListCache = []
    const userList = await getRedisAsync(process.env.QUEUE_USER_LIST)
    if (userList){
        userListCache = JSON.parse(userList)
        await sendBibleVerse(userListCache)
        Queue.process()
    } else {
        console.log('There is no register')
    }

});

