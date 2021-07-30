'use strict';

const bcrypt = require('bcrypt');

const SALT_ROUNDS = Number(process.env.SALT_ROUNDS);

module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      'users',
      [
        {
          userName: 'Rick',
          firstName: 'Rick',
          lastName: 'Wolt',
          email: 'rick@rick.com',
          password: bcrypt.hashSync('rick123', SALT_ROUNDS),
          phoneNumber: '0612345678',
          admin: false,
          totaalToto: true,
          teamId: 206,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userName: 'Siffy',
          firstName: 'Sifan',
          lastName: 'Hassan',
          email: 'sifan@hassan.com',
          password: bcrypt.hashSync('sifan123', SALT_ROUNDS),
          phoneNumber: '0612345678',
          admin: false,
          totaalToto: false,
          teamId: 1118,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userName: 'Fjodjee',
          firstName: 'Fjodor',
          lastName: 'Dostojewski',
          email: 'fjodor@dostojewski.com',
          password: bcrypt.hashSync('fjodor123', SALT_ROUNDS),
          phoneNumber: '0612345678',
          admin: false,
          totaalToto: true,
          teamId: 195,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userName: 'Jack',
          firstName: 'Jack',
          lastName: 'Sparrow',
          email: 'jack@sparrow.com',
          password: bcrypt.hashSync('jack123', SALT_ROUNDS),
          phoneNumber: '0612345678',
          admin: false,
          totaalToto: true,
          teamId: 414,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userName: 'Gene',
          firstName: 'Gene',
          lastName: 'Simmons',
          email: 'gene@simmons.com',
          password: bcrypt.hashSync('gene123', SALT_ROUNDS),
          phoneNumber: '0612345678',
          admin: false,
          totaalToto: true,
          teamId: 1118,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userName: 'Ali',
          firstName: 'Ali',
          lastName: 'Aldi',
          email: 'ali@aldi.com',
          password: bcrypt.hashSync('ali123', SALT_ROUNDS),
          phoneNumber: '0612345678',
          admin: false,
          totaalToto: true,
          teamId: 1118,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userName: 'Jane',
          firstName: 'Jane',
          lastName: 'Doe',
          email: 'jane@doe.com',
          password: bcrypt.hashSync('jane123', SALT_ROUNDS),
          phoneNumber: '0612345678',
          admin: false,
          totaalToto: true,
          teamId: 1118,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userName: 'John',
          firstName: 'John',
          lastName: 'Doe',
          email: 'john@doe.com',
          password: bcrypt.hashSync('john123', SALT_ROUNDS),
          phoneNumber: '0612345678',
          admin: false,
          totaalToto: true,
          teamId: 1118,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userName: 'Mark',
          firstName: 'Mark',
          lastName: 'Rutte',
          email: 'mark@rutte.com',
          password: bcrypt.hashSync('rutte123', SALT_ROUNDS),
          phoneNumber: '0612345678',
          admin: false,
          totaalToto: true,
          teamId: 1118,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userName: 'Piet',
          firstName: 'Piet',
          lastName: 'Snot',
          email: 'piet@snotte.com',
          password: bcrypt.hashSync('piet123', SALT_ROUNDS),
          phoneNumber: '0612345678',
          admin: false,
          totaalToto: true,
          teamId: 1118,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userName: 'Leo',
          firstName: 'Leo',
          lastName: 'Messi',
          email: 'leo@messi.com',
          password: bcrypt.hashSync('leo123', SALT_ROUNDS),
          phoneNumber: '0612345678',
          admin: false,
          totaalToto: true,
          teamId: 1118,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userName: 'Test',
          firstName: 'Test',
          lastName: 'Test',
          email: 'test@test.com',
          password: bcrypt.hashSync('test123', SALT_ROUNDS),
          phoneNumber: '0612345678',
          admin: false,
          totaalToto: true,
          teamId: 1118,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userName: 'aa',
          firstName: 'aaa',
          lastName: 'aa',
          email: 'aa@aa.com',
          password: bcrypt.hashSync('test123', SALT_ROUNDS),
          phoneNumber: '0612345678',
          admin: false,
          totaalToto: false,
          teamId: 1118,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userName: 'bb',
          firstName: 'bbb',
          lastName: 'bb',
          email: 'bb@bb.com',
          password: bcrypt.hashSync('test123', SALT_ROUNDS),
          phoneNumber: '0612345678',
          admin: false,
          totaalToto: true,
          teamId: 1118,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userName: 'cc',
          firstName: 'ccc',
          lastName: 'cc',
          email: 'cc@cc.com',
          password: bcrypt.hashSync('test123', SALT_ROUNDS),
          phoneNumber: '0612345678',
          admin: false,
          totaalToto: false,
          teamId: 1118,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userName: 'dd',
          firstName: 'dd',
          lastName: 'dd',
          email: 'dd@dd.com',
          password: bcrypt.hashSync('test123', SALT_ROUNDS),
          phoneNumber: '0612345678',
          admin: false,
          totaalToto: true,
          teamId: 1118,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userName: 'ee',
          firstName: 'ee',
          lastName: 'ee',
          email: 'ee@ee.com',
          password: bcrypt.hashSync('test123', SALT_ROUNDS),
          phoneNumber: '0612345678',
          admin: false,
          totaalToto: false,
          teamId: 1118,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userName: 'qq',
          firstName: 'qq',
          lastName: 'qq',
          email: 'qq@qq.com',
          password: bcrypt.hashSync('test123', SALT_ROUNDS),
          phoneNumber: '0612345678',
          admin: false,
          totaalToto: true,
          teamId: 1118,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userName: 'pp',
          firstName: 'pp',
          lastName: 'pp',
          email: 'pp@pp.com',
          password: bcrypt.hashSync('test123', SALT_ROUNDS),
          phoneNumber: '0612345678',
          admin: false,
          totaalToto: true,
          teamId: 1118,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userName: 'zz',
          firstName: 'zz',
          lastName: 'zz',
          email: 'zz@zz.com',
          password: bcrypt.hashSync('test123', SALT_ROUNDS),
          phoneNumber: '0612345678',
          admin: false,
          totaalToto: true,
          teamId: 1118,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userName: 'xx',
          firstName: 'xx',
          lastName: 'xx',
          email: 'xx@xx.com',
          password: bcrypt.hashSync('test123', SALT_ROUNDS),
          phoneNumber: '0612345678',
          admin: false,
          totaalToto: false,
          teamId: 1118,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userName: 'vv',
          firstName: 'vv',
          lastName: 'vv',
          email: 'vv@vv.com',
          password: bcrypt.hashSync('test123', SALT_ROUNDS),
          phoneNumber: '0612345678',
          admin: false,
          totaalToto: true,
          teamId: 1118,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userName: 'nn',
          firstName: 'nn',
          lastName: 'nn',
          email: 'nn@nn.com',
          password: bcrypt.hashSync('test123', SALT_ROUNDS),
          phoneNumber: '0612345678',
          admin: false,
          totaalToto: true,
          teamId: 1118,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userName: 'mn',
          firstName: 'mn',
          lastName: 'mn',
          email: 'mn@mn.com',
          password: bcrypt.hashSync('test123', SALT_ROUNDS),
          phoneNumber: '0612345678',
          admin: false,
          totaalToto: true,
          teamId: 1118,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userName: 'mnq',
          firstName: 'mnq',
          lastName: 'mnq',
          email: 'mnq@mnq.com',
          password: bcrypt.hashSync('test123', SALT_ROUNDS),
          phoneNumber: '0612345678',
          admin: false,
          totaalToto: true,
          teamId: 1118,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userName: 'mnqa',
          firstName: 'mnqa',
          lastName: 'mnqa',
          email: 'mnqa@mnqa.com',
          password: bcrypt.hashSync('test123', SALT_ROUNDS),
          phoneNumber: '0612345678',
          admin: false,
          totaalToto: true,
          teamId: 1118,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userName: 'ffe',
          firstName: 'ffe',
          lastName: 'ffe',
          email: 'ffe@ffe.com',
          password: bcrypt.hashSync('test123', SALT_ROUNDS),
          phoneNumber: '0612345678',
          admin: false,
          totaalToto: true,
          teamId: 1118,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userName: 'ffea',
          firstName: 'ffea',
          lastName: 'ffea',
          email: 'ffea@ffe.com',
          password: bcrypt.hashSync('test123', SALT_ROUNDS),
          phoneNumber: '0612345678',
          admin: false,
          totaalToto: true,
          teamId: 1118,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userName: 'ffeaf',
          firstName: 'ffeaf',
          lastName: 'ffeaf',
          email: 'ffefa@ffef.com',
          password: bcrypt.hashSync('test123', SALT_ROUNDS),
          phoneNumber: '0612345678',
          admin: false,
          totaalToto: false,
          teamId: 1118,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userName: 'ff',
          firstName: 'ff',
          lastName: 'ff',
          email: 'ff@ff.com',
          password: bcrypt.hashSync('test123', SALT_ROUNDS),
          phoneNumber: '0612345678',
          admin: false,
          totaalToto: false,
          teamId: 1118,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    ),

  down: async (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('users', null, {}),
};
