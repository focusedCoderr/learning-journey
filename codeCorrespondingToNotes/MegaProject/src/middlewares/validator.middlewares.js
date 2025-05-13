import { validationResult } from "express-validator";
import { ApiError } from "../utils/api-error.js";
const validate = (req, res, next) => {
	console.log("this is hi2");

	const errors = validationResult(req);

	if (errors.isEmpty()) {
		return next();
	}

	const extractedErrors = [];

	errors.array().forEach((err) =>
		extractedErrors.push({
			[err.path]: err.msg,
		}),
	);
	console.log(extractedErrors);

	// return new ApiError(422, "Received data is not valid", extractedErrors);
	next(new ApiError(400, "Received data is not valid", extractedErrors));
};

export { validate };
