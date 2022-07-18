const userService = require('../services/user.service');

const getUsers = async (req, res, next) => {
  try {
    const result = await userService.getUsers();

    return res.status(200).json(result);
  } catch (err) {
    console.error(err);
    return next(err);
  }
};

module.exports = {
  getUsers,
};
