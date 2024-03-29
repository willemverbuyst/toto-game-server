const bcrypt = require('bcrypt');

module.exports = (user, password) =>
  !!user &&
  !!password &&
  !!user.password &&
  bcrypt.compareSync(String(password), user.password);
