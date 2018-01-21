'use strict';

const Joi = require('joi');

const PASSWORD = Symbol('password');
const USERNAME = Symbol('username');
const REGEX = {
  [PASSWORD]: /^\S{3,30}$/,
  [USERNAME]: /^[a-z_0-9]{3,20}$/,
};
module.exports = {
  signup: Joi.object().keys({
    username: Joi.string().regex(REGEX[USERNAME]).required(),
    password: Joi.string().regex(REGEX[USERNAME]),
    password2: Joi.string().regex(REGEX[USERNAME]),
  }).with('username', [ 'password', 'password2' ]),

  signin: Joi.object().keys({
    username: Joi.string().regex(REGEX[USERNAME]).required(),
    password: Joi.string().regex(REGEX[USERNAME]).required(),
  }),
};
