const Redis = require('redis');

const redisHost = `redis://${process.env.REDIS_HOST}:6379`;
console.log('Redis Host >>>>>>>>>>>>> ', redisHost);
const redisClient = Redis.createClient({
  url: redisHost,
});

redisClient.on('error', (err) => {
  console.log('Redis Client Error', err);
});

(async () => {
  try {
    await redisClient.connect();
    await redisClient.set('team', 'bfree');
  } catch (err) {
    console.error(err);
  }
})();

module.exports = redisClient;
