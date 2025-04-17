import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
			trim: true,
		},
		isVerified: {
			type: Boolean,
			default: false,
		},
		verificationToken: {
			type: String,
		},
		resetPasswordToken: {
			type: String,
		},
		resetPasswordExpires: {
			type: Date,
		},
		role: {
			type: String,
			enum: ["USER", "ADMIN"],
			default: "USER",
		},
	},
	{
		timestamps: true,
	}
);

userSchema.pre("save", async function (next) {
	console.log(this);
	if (this.isModified("password")) {
		this.password = await bcrypt.hash(this.password, 10);
	}
	next();
});

export const User = mongoose.model("User", userSchema);
