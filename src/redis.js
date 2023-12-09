import 'dotenv/config'
import * as redis from 'redis'

export const redisClient = redis.createClient();
(async () => {
   redisClient.on('error', (err) => console.log(err));
   await redisClient.connect();
})()

export const getRedisAsync = async (key) => {
   const value = await redisClient.get(key);
   return value;
}

export const setRedisAsync = async (key, value) => {
   await redisClient.set(key, value);
}
