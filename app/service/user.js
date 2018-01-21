'use strict';

const crypto = require('crypto');
const faker = require('faker');
const Service = require('egg').Service;

class UserService extends Service {
  async signin(username, pwd) {
    const user = await this.ctx.model.User.findByUsername(username);
    if (!user) {
      return;
    }
    const hash = crypto.createHash('sha256');
    hash.update(pwd);
    hash.update(user.sault);
    const pwdToCheck = hash.digest('hex');
    if (pwdToCheck === user.password) {
      return user;
    }
    return;
  }
  async signup(username, pwd) {
    const user = await this.ctx.model.User.findByUsername(username);
    if (user) {
      return;
    }

    const hash = crypto.createHash('sha256');
    const sault = faker.internet.password();
    hash.update(pwd);
    hash.update(sault);
    const passwordToSave = hash.digest('hex');
    const newUser = await this.ctx.model.User.create({ username, sault, password: passwordToSave });
    return newUser;
  }
  async getUserById(id) {
    return await this.ctx.model.User.findOne({ id });
  }
}
module.exports = UserService;
