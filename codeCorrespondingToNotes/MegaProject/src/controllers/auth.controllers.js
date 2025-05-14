import { asyncHandler } from "../utils/async-handler.js";
import { User } from "../models/user.models.js";
import { ApiError } from "../utils/api-error.js";
import { ApiResponse } from "../utils/api-response.js";
import crypto from "crypto";
import bcrypt from "bcryptjs";
import {
	sendmail,
	emailVerificationGenerateContent,
	forgotPasswordGenerateContent,
} from "../utils/mail.js";
import jwt from "jsonwebtoken";

const registerUser = asyncHandler(async (req, res, next) => {
	const { email, username, password } = req.body;
	//validation already done in the middleware
	// registrationValidation(body);

	const existingUser = await User.findOne({ email });
	if (existingUser) {
		return next(
			new ApiError(400, "User already exists. Login with email and password"),
		);
	}

	const usernameExists = await User.findOne({ username });

	if (usernameExists) {
		return next(
			new ApiError(400, "Username already exists. Please try another username"),
		);
	}

	const hashedPassword = await bcrypt.hash(password, 10);

	const newUser = new User({
		email,
		password: hashedPassword,
		username,
	});
	const { hashedToken, unHashedToken, tokenExpiry } =
		newUser.generateTemporaryToken();
	newUser.emailVerificationToken = hashedToken;
	newUser.emailVerificationExpiry = tokenExpiry;

	await newUser.save();
	console.log(newUser);
	const mailOptions = {
		email,
		subject: "Please verify your email address to complete signup",
		genContent: emailVerificationGenerateContent(
			username,
			"https://www.shanticarbons.com",
		),
	};
	const emailsent = await sendmail(mailOptions);

	await newUser.save();
	const response = new ApiResponse(
		200,
		"thisisdata",
		"User registered successfully",
	);

	return res.status(response.statusCode).json(response);
});

const loginUser = asyncHandler(async (req, res, next) => {
	const { email, password } = req.body;

	const existingUser = User.findOne({ email });

	if (!existingUser) {
		return next(
			new ApiError(
				400,
				"Email not registerered. Please register before trying to login",
			),
		);
	}

	const isPasswordCorrect = await bcrypt.compare(
		password,
		existingUser.password,
	);

	if (!isPasswordCorrect) {
		return next(new ApiError(400, "User Credentials wrong"));
	}

	const payload = { id: existingUser._id };
	const secret = process.env.ACCESS_TOKEN_SECRET;

	const token = jwt.sign(payload, secret, {
		expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
	});

	const cookieOptions = {
		httpOnly: true, //cookie in control of backend....normal user cannot change it
		secure: true,
		maxAge: 24 * 60 * 60 * 1000,
	};
	res.cookie("token", token, cookieOptions);

	const response = new ApiResponse(200, { message: "Login Successful" });

	return res.status(response.statusCode).json(response);
});

const logoutUser = asyncHandler(async (req, res, next) => {});

const verifyEmail = asyncHandler(async (req, res, next) => {});

const resendVerificationEmail = asyncHandler(async (req, res, next) => {});

export { registerUser, loginUser };
