'use strict';
const co = require('co');

module.exports = {
  up: co.wrap(function* (queryInterface, Sequelize) {
    const { STRING, INTEGER, DATE, BOOLEAN, TEXT } = Sequelize;

    yield queryInterface.createTable('digests', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      hash: { type: STRING, allowNull: false },
      link: { type: STRING, allowNull: false },
      title: { type: STRING, allowNull: false },
      content: { type: TEXT, allowNull: false, defaultValue: '' },
      user_id: { type: INTEGER, allowNull: false },
      created_at: DATE,
      updated_at: DATE,
      deleted: { type: BOOLEAN, allowNull: false, defaultValue: false },
      deleted_at: DATE,
    });

    yield queryInterface.addIndex('digests', {
      fields: [ 'hash' ],
      type: 'UNIQUE' }
    );

    yield queryInterface.addConstraint('digests', [ 'user_id' ],
      {
        type: 'FOREIGN KEY',
        name: 'fk_user_id',
        references: {
          table: 'users',
          field: 'id',
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      });
  }),
  down: co.wrap(function* (queryInterface) {
    yield queryInterface.dropTable('digests');
  }),
};
