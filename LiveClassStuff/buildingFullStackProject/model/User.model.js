import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
	{
		name: String,
		email: String,
		password: String,
		role: {
			type: String,
			enum: ["User", "Admin"],
			default: "User",
		},
		isVerified: {
			type: Boolean,
			default: false,
		},
		verificationToken: {
			type: "String",
		},
		resetPasswordToken: {
			type: String,
		},
		resetPasswordExpires: {
			type: Date,
		},
	},
	{ timestamps: true }
);

export const User = mongoose.model("User", userSchema);
