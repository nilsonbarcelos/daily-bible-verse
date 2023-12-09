import { getRedisAsync, setRedisAsync } from "../redis"

export default {
    async store(req, res){
        const { name, email } = req.body

        
        const user = {
            name,
            email
        }
        
        var userListCache = []
        const userList = await getRedisAsync(process.env.QUEUE_USER_LIST)
        if (userList){
            userListCache = JSON.parse(userList)
            userListCache.push(JSON.stringify(user))
        } else {
            userListCache.push(JSON.stringify(user))
        }

        setRedisAsync(process.env.QUEUE_USER_LIST, JSON.stringify(userListCache))

        return res.json(`Email ${email} added successfuly`)
    }
}