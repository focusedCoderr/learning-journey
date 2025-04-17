import { User } from "../models/user.models.js";
import crypto from "crypto";
import nodemailer from "nodemailer";

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

	try {
		const existingUser = await User.findOne({ email });
		if (existingUser) {
			return res.status(400).json({
				message: "User is already registered",
			});
		}

		const newUser = await User.create({ name, email, password });
		console.log(newUser);

		const token = crypto.randomBytes(32).toString("hex");
		newUser.verificationToken = token;

		// send email

		const transporter = nodemailer.createTransport({
			host: process.env.MAILTRAP_HOST,
			port: process.env.MAILTRAP_PORT,
			secure: false, // true for port 465, false for other ports
			auth: {
				user: process.env.MAILTRAP_USERNAME,
				pass: process.env.MAILTRAP_PASSWORD,
			},
		});

		const mailOptions = {
			from: process.env.MAILTRAP_SENDEREMAIL, // sender address
			to: newUser.email, // list of receivers
			subject: "Please verify your email address", // Subject line
			html: `
		<p>Please verify your email account by clicking <a href
		="${process.env.BASE_URL}${process.env.BASE_EXTENSION}verify/
		${token}">here</a></p>	
		`, // html body
		};

		const info = await transporter.sendMail(mailOptions);

		console.log(`Message sent: ${info.messageId}`);

		await newUser.save();

		res.status(200).json({
			message: "User registered successfully",
		});
	} catch (error) {
		console.log(error);
		return res.status(400).json({
			message: "User not registered",
			success: false,
		});
	}
};

const verifyUser = async (req, res) => {
	const { token } = req.params;
	const existingUser = await User.findOne({ verificationToken: token });

	if (!existingUser) {
		return res.status(400).json({
			message: "Wrong token",
		});
	}

	existingUser.isVerified = true;

	//null will keep the key and set value to null,
	// but if value is undefined, mongodb treats it as
	// if this key doesn't exist and it will not be
	// shown in the document
	existingUser.verificationToken = undefined;
	// existingUser.verificationToken = null;
	await existingUser.save();
};
export { checkWorkingFunctionality, registerUser, verifyUser };
