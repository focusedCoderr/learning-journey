import { User } from "../models/user.models.js";
import crypto from "crypto";
import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const checkWorkingFunctionality = async (req, res) => {
	res.status(201).json({
		message: "basic working properly",
	});
};

const registerUser = async (req, res) => {
	const { name, email, password } = req.body;

	if (!name || !email || !password) {
		return res.status(400).json({
			message: "Please enter all credentials",
		});
	}

	try {
		const existingUser = await User.findOne({ email });
		if (existingUser) {
			return res.status(400).json({
				message: "User is already registered",
			});
		}

		const newUser = await User.create({ name, email, password });
		console.log(newUser);

		const token = crypto.randomBytes(32).toString("hex");
		newUser.verificationToken = token;
		console.log(newUser);

		// send email

		const transporter = nodemailer.createTransport({
			host: process.env.MAILTRAP_HOST,
			port: process.env.MAILTRAP_PORT,
			secure: false, // true for port 465, false for other ports
			auth: {
				user: process.env.MAILTRAP_USERNAME,
				pass: process.env.MAILTRAP_PASSWORD,
			},
		});

		const mailOptions = {
			from: process.env.MAILTRAP_SENDEREMAIL, // sender address
			to: newUser.email, // list of receivers
			subject: "Please verify your email address", // Subject line
			html: `
		<p>Please verify your email account by clicking <a href
		="${process.env.BASE_URL}${process.env.BASE_EXTENSION}verify/
		${token}">here</a></p>	
		`, // html body
		};

		const info = await transporter.sendMail(mailOptions);

		console.log(`Message sent: ${info.messageId}`);

		await newUser.save();

		res.status(200).json({
			message: "User registered successfully",
		});
	} catch (error) {
		console.log(error);
		return res.status(400).json({
			message: "User not registered",
			success: false,
		});
	}
};

const verifyUser = async (req, res) => {
	const { token } = req.params;
	if (!token) {
		return res.status(400).json({
			message: "Invalid token",
		});
	}
	try {
		const existingUser = await User.findOne({ verificationToken: token });

		if (!existingUser) {
			return res.status(400).json({
				message: "Wrong token",
			});
		}

		existingUser.isVerified = true;

		//null will keep the key and set value to null,
		// but if value is undefined, mongodb treats it as
		// if this key doesn't exist and it will not be
		// shown in the document
		existingUser.verificationToken = undefined;
		// existingUser.verificationToken = null;
		await existingUser.save();
	} catch (error) {
		console.log(error);
	}
};

const login = async (req, res) => {
	let { email, password } = req.body;
	if (!email || !password) {
		return res.status(400).json({
			message: "Please enter both username and password",
		});
	}
	console.log(typeof password);

	if (typeof password !== "string") {
		// console.log(typeof password);
		// return res.status(400).json({
		// 	message: "please pass a string password",
		// });
		password = String(password);
	}
	console.log(typeof password);
	console.log(password);

	try {
		const existingUser = await User.findOne({ email });
		if (!existingUser) {
			return res.json({
				message: "User does not exist. Please register first",
			});
		}

		const allowLogin = await bcrypt.compare(password, existingUser.password);
		// console.log(password);
		// console.log(existingUser.password);

		// const hashedNewPassword = await bcrypt.hash(password, 10);
		// console.log(hashedNewPassword);

		if (!allowLogin) {
			return res.status(400).json({
				message: "Please enter correct password",
			});
		}

		//check whether user is verified or not - do it yourself

		if (!existingUser.isVerified) {
			return res.status(400).json({
				message: "Please verify your email  ",
			});
		}

		const idOfUser = existingUser._id;
		const secret = process.env.JWT_SECRET;
		const payload = {
			id: idOfUser,
		};

		const token = jwt.sign(payload, secret, {
			expiresIn: "24h",
		});

		console.log(token);

		const cookieOptions = {
			httpOnly: true,
			secure: true,
			maxAge: 24 * 60 * 60 * 1000,
		};
		res.cookie("token", token, cookieOptions);
		res.status(200).json({
			message: "User logged in",
			success: true,
			token,
			user: {
				id: existingUser._id,
				name: existingUser.name,
				role: existingUser.role,
			},
		});
	} catch (error) {
		console.log("Error logging in ", error);
		return res.status(400).json({
			message: "Not logged in",
			error,
		});
	}
};

const getMe = async (req, res) => {
	try {
		const userTryingToGetProfile = req.user;
		const userInDb = await User.findById(userTryingToGetProfile.id).select(
			"-password"
		);

		if (!userInDb) {
			return res.status(400).json({
				message: "No User found",
			});
		}

		return res.status(200).json({
			success: true,
			userInDb,
		});
	} catch (error) {
		return res.status(400).json({
			message: "error getting the profile of user",
		});
	}
};

const logoutUser = async (req, res) => {
	try {
		res.cookie("token", "", {
			expires: new Date(0),
		});

		return res.status(200).json({
			message: "User logged out successfully",
			success: true,
		});
	} catch (error) {
		return res.status(400).json({
			message: "Could not log out user",
			success: false,
		});
	}
};

const forgotPassword = async (req, res) => {
	try {
		const emailOfUser = req.body.email;
		const existingUser = await User.findOne({ email: emailOfUser });

		if (!existingUser) {
			return res.status(400).json({
				message: "Email not registered",
				success: false,
			});
		}

		const resetPassToken = crypto.randomBytes(32).toString("hex");
		console.log(resetPassToken);
		const resetPassExpiry = Date.now() + 10 * 60 * 1000;
		existingUser.resetPasswordToken = resetPassToken;
		existingUser.resetPasswordExpires = resetPassExpiry;

		const transporter = nodemailer.createTransport({
			host: process.env.MAILTRAP_HOST,
			port: process.env.MAILTRAP_PORT,
			secure: false, // true for port 465, false for other ports
			auth: {
				user: process.env.MAILTRAP_USERNAME,
				pass: process.env.MAILTRAP_PASSWORD,
			},
		});

		const mailOptions = {
			from: process.env.MAILTRAP_SENDEREMAIL, // sender address
			to: existingUser.email, // list of receivers
			subject: "Here's the link to reset your password", // Subject line
			text: "This message contains the link to reset your password!", // plain text body
			html: `
				<p>Please click <a href="${process.env.BASE_URL}${process.env.BASE_EXTENSION}resetYourPassword/${resetPassToken}">here</a> 
				to reset your password</p>
			`, // html body
		};

		const info = await transporter.sendMail(mailOptions);

		await existingUser.save();
	} catch (error) {
		return res.status(400).json({
			message: "reset password failed",
		});
	}
};

const resetPassword = async (req, res) => {
	try {
		const { token } = req.params;
		const { password, confPassword } = req.body;

		if (password !== confPassword) {
			return res.status(400).json({
				message: "password and confirm passwords do not match",
			});
		}

		const existingUser = await User.findOne({
			resetPasswordToken: token,
			resetPasswordExpires: { $gt: Date.now() },
		});

		if (!existingUser) {
			return res.status(400).json({
				message: "Either user not found or reset window expired",
			});
		}

		existingUser.password = password;
		existingUser.resetPasswordToken = null;
		existingUser.resetPasswordExpires = null;
		await existingUser.save();

		res.status(200).json({
			message: "Password resetted successfully. Please login with new password",
		});
	} catch (error) {
		return res.status(400).json({
			message: "Password not resetted",
		});
	}
};

export {
	checkWorkingFunctionality,
	registerUser,
	verifyUser,
	login,
	getMe,
	logoutUser,
	resetPassword,
	forgotPassword,
};
