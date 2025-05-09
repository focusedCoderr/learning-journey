import { log } from "console";
import { User } from "../model/User.model.js";
import crypto from "crypto";
import nodemailer from "nodemailer";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const registerUser = async (req, res) => {
	// get data
	// validate
	//check if user exists
	// create a user in the database
	// create verification token
	// save token in database
	// send token as email to user
	// send success status to user

	const { email, name, password } = req.body;

	if (!email || !name || !password) {
		return res.status(400).json({
			message: "All fields are required",
		});
	}

	try {
		const existingUser = await User.findOne({ email });
		if (existingUser) {
			return res.status(400).json({ message: "User already exists" });
		}
		const newUser = await User.create({ name, email, password });

		console.log(newUser);

		if (!newUser) {
			return res.status(400).json({ message: "User not registered" });
		}

		const token = crypto.randomBytes(32).toString("hex");
		console.log(token);
		newUser.verificationToken = token;
		await newUser.save();

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
			subject: "Verify your Email", // Subject line
			text: `Please click on the following link:
      ${process.env.BASE_URL}/api/v1/users/verify/${token}`,
		};

		await transporter.sendMail(mailOptions);

		res.status(201).json({
			message: "User registered Successfully",
			success: true,
		});
	} catch (error) {
		// console.log(error);
		console.log("hello again");

		res.status(400).json({
			message: "User not registered",
			error,
			success: false,
		});
	}
};

const verifyUser = async (req, res) => {
	// get token from url
	// validate
	// find user based on token
	//if not
	// set isverified to true
	//remove verification token
	//save
	// return response

	const { token } = req.params;
	if (!token) {
		return res.status(400).json({
			message: "Invalid token",
		});
	}
	const verifiedUser = await User.findOne({ verificationToken: token });

	if (!verifiedUser) {
		return res.status(400).json({
			message: "Wrong Token",
		});
	}

	verifiedUser.isVerified = true;
	verifiedUser.verificationToken = null;
	await verifiedUser.save();
	res.status(202).json({
		message: "User verified. response sent",
	});
};

const acceptPost = async (req, res) => {
	console.log("i am accepting post request");
	const { email, name, password } = req.body;
	console.log(email, name, password);
};

const login = async (req, res) => {
	const { email, password } = req.body;
	if (!email || !password) {
		return res.status(400).json({
			message: "All fields are required",
		});
	}
	try {
		const existingUser = await User.findOne({ email });
		if (!existingUser) {
			return res.status(400).json({
				message: "Invalid email or password",
			});
		}

		console.log("Gu");
		console.log(existingUser);
		console.log("su");

		console.log(existingUser.password);

		const isMatch = await bcrypt.compare(password, existingUser.password);
		console.log(isMatch);
		console.log("Bye");

		if (!isMatch) {
			return res.status(400).json({
				message: "Invalid email or password",
			});
		}

		const token = jwt.sign(
			{
				id: existingUser._id,
			},
			process.env.JWT_SECRET,
			{
				expiresIn: "24h",
			}
		);

		const cookieOptions = {
			httpOnly: true,
			secure: true,
			maxAge: 24 * 60 * 60 * 1000,
		};
		res.cookie("token", token, cookieOptions);

		res.status(200).json({
			success: true,
			message: "Login successful",
		});
	} catch (error) {
		console.log(error);
	}
};

const getMe = async (req, res) => {
	try {
	} catch (error) {}
};

const logout = async (req, res) => {
	try {
	} catch (error) {}
};

const forgotPassword = async (req, res) => {
	try {
	} catch (error) {}
};

const resetPassword = async (req, res) => {
	try {
	} catch (error) {}
};
export {
	registerUser,
	acceptPost,
	verifyUser,
	login,
	getMe,
	logout,
	forgotPassword,
	resetPassword,
};
