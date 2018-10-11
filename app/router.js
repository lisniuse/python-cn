'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/:path', controller.home.index);
  router.get('/:path/:path2', controller.home.index);
  router.get('/:path/:path2/:path3', controller.home.index);
  router.get('/:path/:path2/:path3/:path4', controller.home.index);
};
