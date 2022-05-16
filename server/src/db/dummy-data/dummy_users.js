const bcrypt = require('bcrypt');
const SALT_ROUNDS = Number(process.env.SALT_ROUNDS);
const users = [
  {
    id: '93c7e7f5-2872-49e3-ab71-41fd563d21e6',
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
    id: '22d37683-3230-4e63-a62e-73a5ed803027',
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
    id: '5292b601-ae7d-4452-bf17-ce9bc76b4f1f',
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
    id: '49b2617f-07f3-42df-83cf-4af50d83a771',
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
    id: '1a3a6370-2164-448a-8daa-d3899b10e16a',
    userName: 'Mark',
    firstName: 'Mark',
    lastName: 'Rutte',
    email: 'mark@rutte.com',
    password: bcrypt.hashSync('mark123', SALT_ROUNDS),
    phoneNumber: '0612345678',
    admin: false,
    totaalToto: true,
    teamId: 1118,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 'c813a78e-7d19-4de8-aec3-1d2ea24609cd',
    userName: 'Piet',
    firstName: 'Piet',
    lastName: 'Snot',
    email: 'piet@snot.com',
    password: bcrypt.hashSync('piet123', SALT_ROUNDS),
    phoneNumber: '0612345678',
    admin: false,
    totaalToto: true,
    teamId: 1118,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '89b840df-891f-43ca-a091-ec9af7e1e7bc',
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
    id: 'ff649a0f-b790-4e6c-b225-adae0ec0750f',
    userName: 'Nikolas',
    firstName: 'Nikolas',
    lastName: 'Wiggins',
    email: 'nikolas@wiggins.com',
    password: bcrypt.hashSync('nikolas123', SALT_ROUNDS),
    phoneNumber: '0612345678',
    admin: false,
    totaalToto: true,
    teamId: 1118,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '85120075-b044-42dd-a6d9-dce07cad8068',
    userName: 'Gael',
    firstName: 'Gael',
    lastName: 'Ruiz',
    email: 'gael@ruiz.com',
    password: bcrypt.hashSync('gael123', SALT_ROUNDS),
    phoneNumber: '0612345678',
    admin: false,
    totaalToto: true,
    teamId: 1118,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '6a9ed2d8-7e01-479f-8891-afee18e0e977',
    userName: 'Anne',
    firstName: 'Ann',
    lastName: 'Baron',
    email: 'ann@baron.com',
    password: bcrypt.hashSync('ann123', SALT_ROUNDS),
    phoneNumber: '0612345678',
    admin: false,
    totaalToto: true,
    teamId: 1118,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 'f7f131a9-0004-4e20-8b84-2e1a3f9ac08c',
    userName: 'Daisy',
    firstName: 'Daisy',
    lastName: 'Garner',
    email: 'daisy@garner.com',
    password: bcrypt.hashSync('daisy123', SALT_ROUNDS),
    phoneNumber: '0612345678',
    admin: false,
    totaalToto: true,
    teamId: 1118,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '32220f5e-d0f5-4c83-8d5b-fe135efe3715',
    userName: 'Keira',
    firstName: 'Keira',
    lastName: 'Petersen',
    email: 'keira@petersen.com',
    password: bcrypt.hashSync('keira123', SALT_ROUNDS),
    phoneNumber: '0612345678',
    admin: false,
    totaalToto: true,
    teamId: 1118,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '1c911fa0-b203-44b8-988e-df71966b1c95',
    userName: 'Denzel',
    firstName: 'Denzel',
    lastName: 'Chan',
    email: 'denzel@chan.com',
    password: bcrypt.hashSync('denzel123', SALT_ROUNDS),
    phoneNumber: '0612345678',
    admin: false,
    totaalToto: true,
    teamId: 1118,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '218c0e05-5de9-41b7-bd84-cda40e0a58d8',
    userName: 'Hailey',
    firstName: 'Hailey',
    lastName: 'Fraizor',
    email: 'hailey@fraizor.com',
    password: bcrypt.hashSync('hailey123', SALT_ROUNDS),
    phoneNumber: '0612345678',
    admin: false,
    totaalToto: true,
    teamId: 1118,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 'eb718ebc-b685-4893-b5bd-c8caffdb7c69',
    userName: 'April',
    firstName: 'April',
    lastName: 'Bright',
    email: 'april@bright.com',
    password: bcrypt.hashSync('april123', SALT_ROUNDS),
    phoneNumber: '0612345678',
    admin: false,
    totaalToto: true,
    teamId: 1118,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 'b470d02a-c14f-4ddd-b577-fded45cd602f',
    userName: 'Antony',
    firstName: 'Antony',
    lastName: 'Li',
    email: 'antony@li.com',
    password: bcrypt.hashSync('antony123', SALT_ROUNDS),
    phoneNumber: '0612345678',
    admin: false,
    totaalToto: true,
    teamId: 1118,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '376f68ac-d1fa-446d-8852-816c4b17b9e9',
    userName: 'Suzy',
    firstName: 'Suzan',
    lastName: 'Matt',
    email: 'suzan@matt.com',
    password: bcrypt.hashSync('suzan123', SALT_ROUNDS),
    phoneNumber: '0612345678',
    admin: false,
    totaalToto: true,
    teamId: 1118,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '68e1e19b-ad85-494e-be58-7262aa2f2477',
    userName: 'Steve',
    firstName: 'Steve',
    lastName: 'City',
    email: 'steve@city.com',
    password: bcrypt.hashSync('steve123', SALT_ROUNDS),
    phoneNumber: '0612345678',
    admin: false,
    totaalToto: true,
    teamId: 1118,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 'e6b576fb-319b-4ed6-abac-e308db97a61f',
    userName: 'Jauylan',
    firstName: 'Jauylan',
    lastName: 'Khan',
    email: 'jauylan@khan.com',
    password: bcrypt.hashSync('jauylan123', SALT_ROUNDS),
    phoneNumber: '0612345678',
    admin: false,
    totaalToto: true,
    teamId: 1118,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
module.exports = users;