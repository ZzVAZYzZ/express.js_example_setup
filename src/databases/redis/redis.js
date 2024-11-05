'use strict'
const redis = require('redis');

let client = {};

client.instaceClient = redis.createClient({
    url: process.env.REDIS_CONNECT_URL
  });

const setObjectInRedis = async (key, object, expireTime) => {
    await client.instaceClient.set(key, JSON.stringify(object),{EX:expireTime});
};

const getDataFromRedis = async (key) => {
    const value = await client.instaceClient.get(key);
    return JSON.parse(value);
};

const pushToBlackListTokenFromRedis = async (key,token,expireTime) => {
    await client.instaceClient.RPUSH(key,token);
    await client.instaceClient.expire(key,expireTime);
}

const isHaveTokenInBlackList = async (key,token) => {
    const list = await client.instaceClient.lRange(key,0,-1);
    const found = list.includes(token);
    return found;
    
}

const connectRedis = async  () => {
    

    client.instaceClient.on('error', (err) => console.log('Redis Client Error', err));
    
    await client.instaceClient.connect().then(()=>console.log("Redis connected"));
    // pushToBlackListTokenFromRedis("user1","asdasdczxc");
    // pushToBlackListTokenFromRedis("user1","xcvxcg");
    // pushToBlackListTokenFromRedis("user1","ghjgj");
    // pushToBlackListTokenFromRedis("user2","1243234");
    // pushToBlackListTokenFromRedis("user2","67567");
    // isHaveTokenInBlackList("user1","ghjgj").then((result)=>{console.log(result);});
    // isHaveTokenInBlackList("user1","xcvxcg").then((result)=>{console.log(result);});
    // isHaveTokenInBlackList("haiminh454@yahoo.com","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoibWluaCBoYWkiLCJlbWFpbCI6ImhhaW1pbmg0NTRAeWFob28uY29tIiwiaWQiOiI2NzIzZmJiZmRkNzFmM2YzZGQ4OGQ5ZGUifSwiaWF0IjoxNzMwODI5NzQzLCJleHAiOjE3MzA4MzA2NDN9.3XYh0YWqa4kPW4UAgVBQorNURYd3ZI-b1Vq2bWYgjwE").then((result)=>{console.log(result);});
}

const getRedis =  () =>  client;

const closeRedis = async () => {
    client.instaceClient.off('error', (err) => console.log('Redis Client Error', err))
    await client.instaceClient.disconnect().then(()=>{console.log('Redis disconnected')});
}

module.exports = {connectRedis, getRedis, closeRedis, setObjectInRedis, getDataFromRedis, pushToBlackListTokenFromRedis, isHaveTokenInBlackList};
