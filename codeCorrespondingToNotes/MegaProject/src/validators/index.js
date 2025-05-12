import { body } from "express-validator";

const userRegistrationValidator = () => {
	return [
		body("email")
			.isEmail()
			.withMessage("Email is invalid")
			.notEmpty()
			.withMessage("Email is required")
			.trim(),
		body("username")
			.trim()
			.notEmpty()
			.withMessage("Username is required")
			.isLength({ min: 3 })
			.withMessage("Username should be greater than 2 characters")
			.isLength({ max: 13 })
			.withMessage("Username should be less than 14 characters"),
	];
};

const userLoginValidator = () => {
	return [
		body("email")
			.notEmpty()
			.withMessage("Email is required")
			.isEmail()
			.withMessage("Email Invalid")
			.trim(),
		body("password").notEmpty().withMessage("Password cannot be empty"),
	];
};
export { userRegistrationValidator, userLoginValidator };
