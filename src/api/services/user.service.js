const User = require('../models/user');
const redisClient = require('../../loaders/redis');

const setError = (message, status) => {
  const error = new Error(message);
  error.status = status;
  return error;
};

const getUsers = async () => {
  try {
    const team = await redisClient.get('team');
    console.log('Redis Get >>>>>>>> ', team);

    const users = await User.findAll();

    return users;
  } catch (err) {
    console.error(err);
    throw setError(err.message, 500);
  }
};

module.exports = {
  getUsers,
};
