const config = {
	production: {
		SECRET: process.env.SECRET,
		DATABASE: process.env.MONGOLAB_URI,
	},
	default: {
		SECRET: 'SUPERSECRETPASSWORD123',
		DATABASE: 'mongodb://localhost:27017/book_shelf',
	},
};

exports.get = function get(env) {
  return config[env] || config.default;
};

exports.CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || 'http://localhost:3000';

exports.DATABASE_URL =
	process.env.DATABASE_URL || 'mongodb://localhost/test_book_shelf';
exports.TEST_DATABASE_URL =
  process.env.TEST_DATABASE_URL || 'mongodb://localhost/test_book_shelf';
exports.PORT = process.env.PORT || 3001;
exports.JWT_SECRET = process.env.JWT_SECRET || 'Liam';
// exports.JWT_EXPIRY = process.env.JWT_EXPIRY || '5d';
