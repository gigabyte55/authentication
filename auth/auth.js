const bcrypt = require('bcryptjs');
const User = require('../model/user.js');
exports.register = async (req, res) => {
	const { username, password1, password2 } = req.body;
	if (!username || !password1 || !password2) {
		return res
			.status(400)
			.json({
				message:
					'Username, password or password confirmation not present',
			});
	}

	if (password1 !== password2) {
		return res.status(400).json({ message: 'Passwords are not the same' });
	}

	if (password1.length < 6) {
		return res
			.status(400)
			.json({ message: 'Password less than 6 characters' });
	}

	bcrypt.hash(password1, 10).then(async (hash) => {
		await User.create({
			username,
			password: hash,
		})
			.then(() =>
				res.status(200).json({
					message: 'User successfully created',
				})
			)
			.catch((error) =>
				res.status(400).json({
					message: 'User not created',
					error: error.message,
				})
			);
	});
};

exports.login = async (req, res) => {
	const { username, password } = req.body;
	if (!username || !password) {
		return res.status(400).json({
			message: 'Username or password not present',
		});
	}
	try {
		const user = await User.findOne({ username });
		if (!user) {
			res.status(401).json({
				message: 'Login not successful',
				error: 'User not found',
			});
		} else {
			bcrypt.compare(password, user.password).then(function (result) {
				result
					? res.status(200).json({
							message: 'Login successful',
					})
					: res.status(400).json({ message: 'Login not succesful' });
			});
		}
	} catch (error) {
		res.status(400).json({
			message: 'An error occurred',
			error: error.message,
		});
	}
};
