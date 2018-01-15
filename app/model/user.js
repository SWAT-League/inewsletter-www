'use strict';

const Digest = require('./digest');

module.exports = app => {
  const { STRING, DATE, BOOLEAN } = app.Sequelize;

  const User = app.model.define('user', {
    username: STRING,
    email: { type: STRING, validate: { isEmail: true } },
    emailVarified: BOOLEAN,
    lastLoginAt: DATE,
  }, {
    paranoid: true,
    underscored: true,
  });

  User.hasMany(Digest);

  User.findByUsername = function* (username) {
    return yield this.findOne({ username });
  };

  User.login = function* () {
    yield this.update({ lastLoginAt: new Date() });
  };

  return User;
};
