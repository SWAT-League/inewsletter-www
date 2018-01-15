'use strict';

const User = require('./user');

module.exports = app => {
  const { STRING, BOOLEAN, TEXT } = app.Sequelize;

  const Digest = app.model.define('digest', {
    hash: STRING,
    link: { type: STRING },
    title: { type: STRING },
    content: { type: TEXT },
    deleted: BOOLEAN,
  }, {
    paranoid: true,
    underscored: true,
  });

  Digest.belongsTo(User, { foreignKey: 'user_id' });

  return Digest;
};
