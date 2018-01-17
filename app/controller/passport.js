'use strict';

const Controller = require('egg').Controller;

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

  async signup() {
    const { ctx } = this;

    const { username } = ctx.request.body;

    const user = await ctx.model.User.create({ username });

    if (user) {
      ctx.session.userId = user.id;
      ctx.redirect('http://localhost:3000/');
    } else {
      ctx.render('login.nj', { message: 'user does not exist' });
    }
  }
}

module.exports = PassportController;
