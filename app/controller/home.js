'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;

    const data = { username: 'yiliang' };
    await ctx.render('home.nj', data);
  }

}

module.exports = HomeController;
