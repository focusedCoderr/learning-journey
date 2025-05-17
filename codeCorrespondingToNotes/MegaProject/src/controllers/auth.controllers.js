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

const generateAccessAndRefreshToken = async (userId) => {
	try {
		const existingUser = await User.findById(userId);
		const accessToken = existingUser.generateAccessToken();
		const refreshToken = existingUser.generateRefreshToken();
		existingUser.refreshToken = refreshToken;
		await existingUser.save({ validateBeforeSave: false });

		return { accessToken, refreshToken };
	} catch (error) {
		throw new ApiError(
			500,
			"Something went wrong while generating refresh and access token",
		);
	}
};

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

const loginUserYoutube = asyncHandler(async (req, res, next) => {
	const { username, email, password } = req.body;

	if (!username && !email) {
		throw new ApiError(400, "Username or password is required");
	}

	const existingUser = User.findOne({
		$or: [{ username }, { email }],
	});

	if (!existingUser) {
		throw new ApiError(404, "user does not exist");
	}

	const isPasswordValid = await existingUser.isPasswordCorrect(password);

	if (!isPasswordValid) {
		throw new ApiError(401, "Invalid user credentials");
	}

	const { accessToken, refreshToken } = await generateAccessAndRefreshToken(
		existingUser._id,
	);

	const loggedInUser = await User.findById(existingUser._id).select(
		"-password -refreshToken",
	);

	const options = {
		httpOnly: true,
		secure: true,
	};

	return res
		.status(200)
		.cookie("accessToken", accessToken, options)
		.cookie("refreshToken", refreshToken, options)
		.json(
			new ApiResponse(
				200,
				{
					user: loggedInUser,
					accessToken,
					refreshToken,
				},
				"User logged in successfully",
			),
		);
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
