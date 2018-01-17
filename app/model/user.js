'use strict';

module.exports = app => {
  const { STRING, DATE, BOOLEAN } = app.Sequelize;

  const User = app.model.define('user', {
    username: STRING,
    email: { type: STRING, validate: { isEmail: true } },
    email_verified: BOOLEAN,
    last_login_at: DATE,
  }, {
    paranoid: true,
    underscored: true,
  });

  User.associate = function() {
    app.model.User.hasMany(app.model.Digest);
  };

  User.findByUsername = async function(username) {
    return await this.findOne({ where: { username } });
  };

  User.login = async function() {
    await this.update({ lastLoginAt: new Date() });
  };

  return User;
};
