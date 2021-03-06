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

  // add your config here
  config.middleware = [ 'responseTime' ];

  exports.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.nj': 'nunjucks',
    },
  };

  exports.joi = {
    options: {},
    locale: {
      'zh-cn': {},
    },
    throw: true,
  };

  return config;
};
