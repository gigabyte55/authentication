const express = require('express');
const app = express();
const PORT = 3000;
const connectDB = require('./db.js');

connectDB();

app.use(express.json());

app.use('/api/auth', require('./auth/route'));

const server = app.listen(PORT, () => {
	console.log(`Server Connected to port ${PORT}`);
});

process.on('unhandledRejection', (err) => {
	console.log(`An error occurred: ${err.message}`);
	server.close(() => process.exit(1));
});
