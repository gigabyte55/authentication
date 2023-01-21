const Mongoose = require('mongoose');
const DB_CONNECTION = 'mongodb://localhost:27017/role_auth';
const connectDB = async () => {
	await Mongoose.connect(DB_CONNECTION, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});
	console.log('MongoDB connected successfully.');
};
module.exports = connectDB;
