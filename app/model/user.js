'use strict';

module.exports = app => {
  const { STRING, DATE, BOOLEAN, Op } = app.Sequelize;

  const User = app.model.define('user', {
    username: STRING,
    password: STRING,
    sault: STRING,
    email: { type: STRING, validate: { isEmail: true } },
    email_verified: BOOLEAN,
    last_login_at: DATE,
  },
  {
    paranoid: true,
    underscored: true,
    defaultScope: { where: { deleted_at: { [Op.eq]: null } } },
  });

  User.associate = function() {
    app.model.User.hasMany(app.model.Digest);
  };

  User.findByUsername = async function(username) {
    return await this.findOne({ where: { username } });
  };

  return User;
};
