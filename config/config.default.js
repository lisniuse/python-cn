'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1539277135489_9433';

  // add your config here
  config.middleware = [];

  config.view = {
    defaultViewEngine: 'ejs',
    mapping: {
        '.html': 'ejs',
    },
  };
  
  return config;
};
