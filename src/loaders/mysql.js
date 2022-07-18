const { sequelize } = require('../api/models');

exports.connect = () => {
  sequelize
    .sync()
    .then(() => {
      console.log('DB Connected Success');
    })
    .catch((err) => {
      console.log('>>> db error');
      console.error(err);
    });
};
