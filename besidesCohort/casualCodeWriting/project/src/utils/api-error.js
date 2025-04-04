class ApiError extends Error {
	constructor(
		statusCode,
		message = 'Something went wrong',
		errors = [],
		stack = '',
	) {
		super(message);
		this.statusCode = statusCode;
		this.success = false; // this is a custom property set by us
		this.errors = errors;

		if (stack) {
			this.stack = stack;
		} else {
			Error.captureStackTrace(this, this.constructor);
		}
	}
}

export { ApiError };
