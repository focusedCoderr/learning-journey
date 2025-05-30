import mongoose, { Schema } from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";

const userSchema = new Schema(
	{
		avatar: {
			type: {
				url: String,
				localpath: String,
			},
			default: {
				url: `https://placehold.co/600x400`,
				localpath: "",
			},
		},
		username: {
			type: String,
			unique: true,
			required: true,
			trim: true,
			lowercase: true,
		},
		email: {
			type: String,
			unique: true,
			required: true,
			trim: true,
			lowercase: true,
		},
		password: {
			type: String,
			required: [true, "Password is required"],
		},
		isEmailVerified: {
			type: Boolean,
			default: false,
		},
		forgotPasswordToken: {
			type: String,
		},
		forgotPasswordExpiry: {
			type: Date,
		},
		refreshToken: {
			type: String,
		},
		emailVerificationToken: {
			type: String,
		},
		emailVerificationExpiry: {
			type: Date,
		},
	},
	{ timestamps: true },
);

userSchema.pre("save", async function (next) {
	if (this.isModified("password")) {
		this.password = await bcrypt.hash(this.password, 10);
	}
	next();
});

userSchema.methods.isPasswordCorrect = async function (password) {
	console.log(password);
	return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateAccessToken = function () {
	return jwt.sign(
		{
			id: this._id,
			email: this.email,
			username: this.username,
		},
		process.env.ACCESS_TOKEN_SECRET,
		{
			expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
		},
	);
};

userSchema.methods.generateRefreshToken = function () {
	return jwt.sign(
		{
			id: this._id,
		},
		process.env.REFRESH_TOKEN_SECRET,
		{
			expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
		},
	);
};

userSchema.methods.generateTemporaryToken = function () {
	const unHashedToken = crypto.randomBytes(20).toString("hex");
	const hashedToken = crypto
		.createHash("sha256")
		.update(unHashedToken)
		.digest("hex");
	const tokenExpiry = Date.now() + 20 * 60 * 1000;

	return { hashedToken, unHashedToken, tokenExpiry };
};

export const User = mongoose.model("User", userSchema);
