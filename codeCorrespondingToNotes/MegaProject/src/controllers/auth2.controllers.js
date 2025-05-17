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
		throw new ApiError(500, "Unable to generate Access and Refresh Token");
	}
};

const loginUser = asyncHandler(async (req, res, next) => {
	const { username, email, password } = req.body;

	const existingUser = User.findOne({
		$or: [{ username }, { email }],
	});

	if (!existingUser) {
		return new ApiError(400, "User does not exist. Please register first");
	}

	const isPasswordValid = await existingUser.isPasswordCorrect(password);
	if (!isPasswordValid) {
		throw new ApiError(400, "Enter correct credentials");
	}

	const { accessToken, refreshToken } = generateAccessAndRefreshToken(
		existingUser._id,
	);

	const loggedInUser = await User.findById(existingUser._id).select(
		"-password -refreshToken",
	);

	const cookieOptions = {
		httpOnly: true,
		secure: true,
	};

	return res
		.status(200)
		.cookie("accessToken", accessToken, cookieOptions)
		.cookie("refreshToken", refreshToken, cookieOptions)
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

const logoutUser = asyncHandler(async (req, res, next) => {
	const idOfuserToBeLoggedOut = req.user._id;

	// const userInDatabase = User.findById(idOfuserToBeLoggedOut);
	// userInDatabase.refreshToken = undefined;

	await User.findByIdAndUpdate(
		idOfuserToBeLoggedOut,
		{
			$set: {
				refreshToken: undefined,
			},
		},
		{
			new: true,
		},
	);

	const cookieOptions = {
		httpOnly: true,
		secure: true,
	};

	return res
		.status(200)
		.clearCookie("accessToken", cookieOptions)
		.clearCookie("refreshToken", cookieOptions)
		.json(new ApiResponse(200, {}, "User loggedOut"));
});

const generateNewAccessAndRefreshToken = asyncHandler(
	async (req, res, next) => {
		const refreshTokenOfLoggedOutUser = req.cookies.refreshToken;

		if (!refreshTokenOfLoggedOutUser) {
			throw new ApiError(400, "Unauthorized Request");
		}
		const decodedData = jwt.verify(
			refreshTokenOfLoggedOutUser,
			process.env.REFRESH_TOKEN_SECRET,
		);
		const userFromDB = await User.findById(decodedData.id);
		if (!userFromDB) {
			throw new ApiError(400, "Invalid refrsh token");
		}
		const refreshTokenFromDb = userFromDB.refreshToken;

		if (refreshTokenOfLoggedOutUser !== refreshTokenFromDb) {
			throw new ApiError(401, "Invalid Refresh Token");
		}

		const { accessToken, refreshToken } = generateAccessAndRefreshToken(
			decodedData.id,
		);

		const cookieOptions = {
			httpOnly: true,
			secure: true,
		};

		return res
			.status(200)
			.cookie("accessToken", accessToken, cookieOptions)
			.cookie("refreshToken", refreshToken, cookieOptions)
			.json(
				new ApiResponse(
					200,
					{
						accessToken,
						refreshToken,
					},
					"New tokens generated successfully",
				),
			);
	},
);

export { loginUser, logoutUser };
