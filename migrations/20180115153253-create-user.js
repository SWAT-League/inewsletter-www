'use strict';
const co = require('co');

module.exports = {
  up: co.wrap(function* (queryInterface, Sequelize) {
    const { STRING, INTEGER, DATE, BOOLEAN } = Sequelize;

    yield queryInterface.createTable('users', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      username: { type: STRING, allowNull: false },
      email: { type: STRING, allowNull: true },
      email_verified: { type: BOOLEAN, defaultValue: false, allowNull: false },
      last_login_at: DATE,
      created_at: DATE,
      updated_at: DATE,
      deleted_at: DATE,
    });

    yield queryInterface.addIndex('users', {
      fields: [ 'username' ],
      type: 'UNIQUE' }
    );
  }),
  down: co.wrap(function* (queryInterface) {
    yield queryInterface.dropTable('users');
  }),
};
