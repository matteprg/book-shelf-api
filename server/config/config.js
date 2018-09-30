// const config = {
//   production: {
//     SECRET: process.env.SECRET,
//     DATABASE: process.env.MONGODB_URL,
//   },
//   default: {
//     SECRET: 'SUPERSECRETPASSWORD123',
//     DATABASE: 'mongodb://localhost:27017/booksShelf',
//   },
// };

// exports.get = function get(env) {
//   return config[env] || config.default;
// };

exports.DATABASE_URL =
  process.env.DATABASE_URL ||
  'mongodb://user1:password1@ds119343.mlab.com:19343/book_shelf';
exports.TEST_DATABASE_URL =
  process.env.TEST_DATABASE_URL || 'mongodb://localhost/book_shelf';
exports.PORT = process.env.PORT || 8080;
exports.JWT_SECRET = process.env.JWT_SECRET || 'Liam';
exports.JWT_EXPIRY = process.env.JWT_EXPIRY || '5d';
