import { log } from "console";
import { User } from "../model/User.model.js";
import crypto from "crypto";
import nodemailer from "nodemailer";

const registerUser = async (req, res) => {
	// get data
	// validate
	//check if user exists
	// create a user in the database
	// create verification token
	// save token in database
	// send token as email to user
	// send success status to user

	const { email, name, password } = req.body;

	if (!email || !name || !password) {
		return res.status(400).json({
			message: "All fields are required",
		});
	}

	try {
		const existingUser = await User.findOne({ email });
		if (existingUser) {
			return res.status(400).json({ message: "User already exists" });
		}
		const newUser = await User.create({ name, email, password });

		console.log(newUser);

		if (!newUser) {
			return res.status(400).json({ message: "User not registered" });
		}

		const token = crypto.randomBytes(32).toString("hex");
		console.log(token);
		newUser.verificationToken = token;
		await newUser.save();

		// send email

		const transporter = nodemailer.createTransport({
			host: process.env.MAILTRAP_HOST,
			port: process.env.MAILTRAP_PORT,
			secure: false, // true for port 465, false for other ports
			auth: {
				user: process.env.MAILTRAP_USERNAME,
				pass: process.env.MAILTRAP_HOST,
			},
		});

		const mailOptions = {
			from: process.env.MAILTRAP_SENDEREMAIL, // sender address
			to: newUser.email, // list of receivers
			subject: "Verify your Email", // Subject line
			text: `Please click on the following link:
      ${process.env.BASE_URL}/api/v1/users/verify/${token}`,
		};

		await transporter.sendMail(mailOptions);

		res.status(201).json({
			message: "User registered Successfully",
			success: true,
		});
	} catch (error) {
		// console.log(error);
		console.log("hello again");

		res.status(400).json({
			message: "User not registered",
			error,
			success: false,
		});
	}
};

const verifyUser = async (req, res) => {
	// get token from url
	// validate
	// find user based on token
	//if not
	// set isverified to true
	//remove verification token
	//save
	// return response

	const { token } = req.params;
	if (!token) {
		return res.status(400).json({
			message: "Invalid token",
		});
	}
	const verifiedUser = await User.findOne({ verificationToken: token });

	if (!verifiedUser) {
		return res.status(400).json({
			message: "Wrong Token",
		});
	}

	verifiedUser.isVerified = true;
	verifiedUser.verificationToken = undefined;
	await verifiedUser.save();
};

const acceptPost = async (req, res) => {
	console.log("i am accepting post request");
	const { email, name, password } = req.body;
	console.log(email, name, password);
};

export { registerUser, acceptPost };
