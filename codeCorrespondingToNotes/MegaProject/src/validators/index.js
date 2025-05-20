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
		body("password")
			.trim()
			.notEmpty()
			.withMessage("Password is required")
			.isLength({ min: 3 })
			.withMessage("Password must be atleast 6 characters long")
			.isLength({ max: 13 })
			.withMessage("Password must be less than 12 characters long"),
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
		body("password")
			.trim()
			.notEmpty()
			.withMessage("Password is required")
			.isLength({ min: 3 })
			.withMessage("Password must be atleast 3 characters long")
			.isLength({ max: 12 })
			.withMessage("Password must be less than 12 characters long"),
		body("username")
			.trim()
			.notEmpty()
			.withMessage("Username is required")
			.isLength({ min: 3 })
			.withMessage("Username should be atleast 3 characters long")
			.isLength({ max: 12 })
			.withMessage("Username should be less than 13 characters"),
	];
};
export { userRegistrationValidator, userLoginValidator };
