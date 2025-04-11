import mongoose, { Schema } from "mongoose";
import bcrypt from "bcryptjs";

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

userSchema.pre("save", async function (next) {
	if (this.isModified("password")) {
		this.password = await bcrypt.hash(this.password, 10);
	}
	next();
});

export const User = mongoose.model("User", userSchema);
