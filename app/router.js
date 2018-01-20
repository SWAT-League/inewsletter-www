'use strict';

module.exports = app => {
  const { router, controller } = app;

  router.get('/', controller.home.index);

  router.get('/signup', controller.passport.signupGateway);

  router.get('/signin', controller.passport.index);


  router.post('/signin', controller.passport.signin);
  router.post('/signup', controller.passport.signup);
};
