import Mailgen from "mailgen";
import nodemailer from "nodemailer";

const sendmail = async (options) => {
	const mailGenerator = new Mailgen({
		theme: "default",
		product: {
			// Appears in header & footer of e-mails
			name: "Mailgen",
			link: "https://mailgen.js/",
			// Optional product logo
			// logo: 'https://mailgen.js/img/logo.png'
		},
	});

	const emailBody = mailGenerator.generate(options.genContent);
	const emailText = mailGenerator.generatePlaintext(options.genContent);

	// use nodemailer to send email

	const transporter = nodemailer.createTransport({
		host: process.env.MAILTRAP_HOST,
		port: process.env.MAILTRAP_PORT,
		secure: false, // true for 465, false for other ports
		auth: {
			user: process.env.MAILTRAP_USERNAME,
			pass: process.env.MAILTRAP_PASSWORD,
		},
	});

	const mailOptions = {
		from: '"Maddison Foo Koch" <maddison53@ethereal.email>',
		to: options.email,
		subject: options.subject,
		text: emailText, // plain‑text body
		html: emailBody, // HTML body
	};

	try {
		await transporter.sendMail(mailOptions);
	} catch (err) {
		console.error("Email failed", err);
	}
};

const emailVerificationGenerateContent = function (username, verificationUrl) {
	return {
		body: {
			name: username,
			intro: "Welcome to our App! We are very excited to have you on board.",
			action: {
				instructions: "To get started with our app, please verify your email:",
				button: {
					color: "#22BC66", // Optional action button color
					text: "Confirm your account",
					link: verificationUrl,
				},
			},
			outro:
				"Need help, or have questions? Just reply to this email, we'd love to help.",
		},
	};
};

const forgotPasswordGenerateContent = function (username, passwordResetUrl) {
	return {
		body: {
			name: username,
			intro: "We got request to change your password",
			action: {
				instructions: "To change the password, click the button",
				button: {
					color: "#22BC66", // Optional action button color
					text: "Confirm your account",
					link: passwordResetUrl,
				},
			},
			outro:
				"Need help, or have questions? Just reply to this email, we'd love to help.",
		},
	};
};

export { sendmail };
