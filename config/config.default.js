'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1515943962113_5570';

  config.session = true;

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

  config.view = {
    defaultViewEngine: 'handlebars',
    defaultExtension: '.hbs',
    mapping: {
      '.hbs': 'handlebars',
    },
  };

  return config;
};
