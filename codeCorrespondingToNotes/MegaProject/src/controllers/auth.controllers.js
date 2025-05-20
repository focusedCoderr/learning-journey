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

const generateAccessAndRefreshTokens = async (userId) => {
	try {
		const userFromDB = await User.findById(userId);

		const AccessToken = await userFromDB.generateAccessToken();
		const RefreshToken = await userFromDB.generateRefreshToken();
		console.log(`Access token is : ${AccessToken}`);
		console.log(`Refresh token is : ${RefreshToken}`);
		userFromDB.refreshToken = RefreshToken;
		userFromDB.save({ validateBeforeSave: false });

		return { AccessToken, RefreshToken };
	} catch (error) {
		throw new ApiError(
			500,
			"Something happened while genrating access and refresh tokens",
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

	const newUser = new User({
		email,
		password,
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

const loginTheUser = asyncHandler(async (req, res, next) => {
	const { email, username, password } = req.body;

	const existingUser = await User.findOne({
		$or: [{ email }, { username }],
	});

	if (!existingUser) {
		const err = new ApiError(400, "Invalid credentials");
		return next(err);
	}

	const isPasswordValid = await existingUser.isPasswordCorrect(password);

	if (!isPasswordValid) {
		const err = new ApiError(400, "Invalid credentials provided by user");
		return next(err);
	}

	const { AccessToken, RefreshToken } = await generateAccessAndRefreshTokens(
		existingUser._id,
	);

	console.log("1:", AccessToken);
	console.log("2:", RefreshToken);

	const cookieOptions = {
		httpOnly: true,
		secure: true,
	};

	const userUpdatedAfterRefreshToken = await User.findById(
		existingUser._id,
	).select("-password -refreshToken");

	return res
		.status(200)
		.cookie("accessToken", AccessToken, cookieOptions)
		.cookie("refreshToken", RefreshToken, cookieOptions)
		.json(
			new ApiResponse(
				200,
				{
					user: userUpdatedAfterRefreshToken,
					AccessToken,
					RefreshToken,
				},
				"Logged in sucessfully",
			),
		);
});

const logoutUser = asyncHandler(async (req, res, next) => {
	await User.findByIdAndUpdate(req.user._id, {
		$set: {
			refreshToken: undefined,
		},
	});

	const cookieOptions = {
		httpOnly: true,
		secure: true,
	};

	return res
		.status(200)
		.clearCookie("accessToken", cookieOptions)
		.clearCookie("refreshToken", cookieOptions)
		.json(new ApiResponse(200, {}, "User Logged out"));
});

const generateNewAccessTokenAndRefreshToken = asyncHandler(
	async (req, res, next) => {
		const refreshTokenFromCookies = req.cookies?.refreshToken;

		if (!refreshTokenFromCookies) {
			throw new ApiError(400, "No refresh token present");
		}

		const decodedData = jwt.verify(
			refreshTokenFromCookies,
			process.env.REFRESH_TOKEN_SECRET,
		);

		if (!decodedData) {
			return next(new ApiError(400, "Token not valid"));
		}

		const userFromDB = await User.findById(decodedData.id);

		if (!userFromDB) {
			throw new ApiError(400, "User not found");
		}

		const { AccessToken, RefreshToken } = generateAccessAndRefreshTokens(
			userFromDB._id,
		);

		const cookieOptions = {
			httpOnly: true,
			secure: true,
		};

		return res
			.status(200)
			.cookie("accessToken", AccessToken)
			.cookie("refreshToken", RefreshToken)
			.json(
				new ApiResponse(
					200,
					{
						user: userFromDB,
						AccessToken,
						RefreshToken,
					},
					"Refresh Token and Access Token generated successfully",
				),
			);
	},
);

const verifyEmail = asyncHandler(async (req, res, next) => {});

const resendVerificationEmail = asyncHandler(async (req, res, next) => {});

export {
	registerUser,
	loginTheUser,
	logoutUser,
	generateNewAccessTokenAndRefreshToken,
};
