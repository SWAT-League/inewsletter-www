'use strict';

const Joi = require('joi');
const Controller = require('egg').Controller;
const userValidator = require('../validator/user');

class PassportController extends Controller {
  async index() {
    const { ctx } = this;

    await ctx.render('signin.nj');
  }

  async signin() {
    const { ctx } = this;

    const { username, password } = ctx.request.body;

    const user = await ctx.model.User.findByUsername(username);

    if (user && user.password === password) {
      ctx.session.userId = user.id;
      ctx.redirect('http://localhost:3000/');
    } else {
      ctx.render('signin.nj', { message: 'user does not exist' });
    }
  }

  async signupGateway() {
    const { ctx } = this;
    await ctx.render('signup.nj');
  }

  async signup() {
    const { ctx } = this;
    const { username, password, password2 } = ctx.request.body;
    const result = Joi.validate({ username, password, password2 }, userValidator.signup);
    if (result.error) {
      // TODO
      ctx.logger.error(result.error);
      ctx.body = await ctx.renderString(result.error.toString());
      return;
    }

    if (password !== password2) {
      ctx.body = await ctx.renderString('passwords are not same');
      return;
    }

    // check duplicated username
    let user = await ctx.model.User.findByUsername(username);
    if (user) {
      // TODO
      ctx.body = await ctx.renderString('username existed');
      return;
    }

    // create user
    user = await ctx.model.User.createUser({ username, password });

    ctx.body = await ctx.renderString('signed up');
  }
}

module.exports = PassportController;
