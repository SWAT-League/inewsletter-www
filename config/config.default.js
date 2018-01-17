'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1515943962113_5570';

  config.session = {
    key: 'EGG_SESS',
    maxAge: 24 * 3600 * 1000, // 1 天
    httpOnly: true,
    encrypt: true,
  };

  config.redis = {
    client: {
      port: 6379,
      host: '127.0.0.1',
      password: '',
      db: 0,
    },
  };
  // add your config here
  config.middleware = [];

  // local dev
  config.sequelize = {
    dialect: 'postgres',
    database: 'inewsletter_db',
    host: 'localhost',
    port: '5432',
    username: '',
    password: '',
  };

  exports.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.nj': 'nunjucks',
    },
  };

  return config;
};
