'use strict';

const crypto = require('crypto');
const faker = require('faker');

module.exports = app => {
  const { STRING, DATE, BOOLEAN } = app.Sequelize;

  const User = app.model.define('user', {
    username: STRING,
    password: STRING,
    sault: STRING,
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

  User.login = async function(username, password) {
    await this.update({ lastLoginAt: new Date() });
  };

  User.createUser = async function(userObj) {
    const hash = crypto.createHash('sha256');
    const sault = faker.internet.password();
    hash.update(userObj.password);
    hash.update(sault);
    const passwordToSave = hash.digest();
    const userToSave = Object.assign(userObj, { sault, password: passwordToSave });
    const newUser = await this.create(userToSave);
    return newUser;
  };

  return User;
};
