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

const registerUser = asyncHandler(async (req, res) => {
	const { email, username, password } = req.body;

	//validation already done in the middleware
	// registrationValidation(body);

	const existingUser = await User.findOne(email);

	if (existingUser) {
		return new ApiError(
			400,
			"User already exists. Login with email and password",
		);
	}

	const usernameExists = await User.findOne(username);

	if (usernameExists) {
		return new ApiError(
			400,
			"Username already exists. Please try another username",
		);
	}

	const hashedPassword = await bcrypt.hash(password, 10);
	const { hashedToken, unHashedToken, tokenExpiry } =
		newUser.generateTemporaryToken();

	const newUser = new User({
		email,
		password: hashedPassword,
		username,
		emailVerificationToken: hashedToken,
		emailVerificationExpiry: tokenExpiry,
	});
	console.log(newUser);
	const mailOptions = {
		email,
		subject: "Please verify your email address to complete signup",
		genContent: emailVerificationGenerateContent(
			username,
			"www.shanticarbons.com",
		),
	};
	const emailsent = await sendmail(mailOptions);
	console.log(emailsent);
	await newUser.save();
	return new ApiResponse(200, "thisisdata", "User registered successfully");
});

export { registerUser };
