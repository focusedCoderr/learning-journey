import { User } from "../models/user.models.js";
import bcrypt from "bcryptjs";

const checkWorkingFunctionality = async (req, res) => {
	res.status(201).json({
		message: "basic working properly",
	});
};

const registerUser = async (req, res) => {
	const { name, email, password } = req.body;

	if (!name || !email || !password) {
		return res.status(400).json({
			message: "Please enter all credentials",
		});
	}

	const existingUser = await User.findOne({ email });
	if (existingUser) {
		return res.status(400).json({
			message: "User is already registered",
		});
	}

	const newUser = await User.create({ name, email, password });

	const token = await bcrypt.hash();
};
export { checkWorkingFunctionality, registerUser };
