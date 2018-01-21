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

    const result = Joi.validate({ username, password }, userValidator.signin);
    if (result.error) {
      // TODO
      ctx.logger.error(result.error);

      await ctx.render('signin.nj', { message: result.error.toString() });
      return;
    }

    const user = await ctx.service.user.signin(username, password);

    if (user) {
      this.logger.info(`User id: ${user.id} (${user.username}) logged in`);
      ctx.session.userId = user.id;
      this.logger.info(JSON.stringify(ctx.session));
      await ctx.redirect('home.nj');
    } else {
      await ctx.render('signin.nj', { message: 'password incorrect or account doesn\'t exist' });
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

      await ctx.render('signup.nj', { message: result.error.toString() });
    }

    if (password !== password2) {
      await ctx.render('signup.nj', { message: 'passwords are not same' });
      return;
    }

    const newUser = await ctx.service.user.signup(username, password);

    if (!newUser) {
      await ctx.render('signup.nj', { message: 'user already exists' });
      return;
    }
    ctx.redirect('/signin');
  }
}

module.exports = PassportController;
