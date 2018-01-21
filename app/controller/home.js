'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    let data = { signin: false };

    const userId = ctx.session.userId;
    if (userId) {
      ctx.user = await ctx.service.user.getUserById(userId);
      data = Object.assign(data, { signin: true, user: ctx.user });
      await ctx.render('home.nj', data);
    } else {
      ctx.redirect('/signin');
    }
  }

}

module.exports = HomeController;
