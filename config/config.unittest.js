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
      host: 'localhost',
      password: '',
      db: 1,
    },
  };

  config.sequelize = {
    dialect: 'postgres',
    database: 'inewsletter_db_unittest',
    host: 'localhost',
    port: '5432',
    username: '',
    password: '',
  };

  return config;
};
