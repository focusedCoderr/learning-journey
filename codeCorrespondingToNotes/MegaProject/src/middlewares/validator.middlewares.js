import { validationResult } from "express-validator";
import { ApiError } from "../utils/api-error.js";
const validate = (req, res, next) => {
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

	next(new ApiError(400, "Received data is not valid", extractedErrors));
};

export { validate };
