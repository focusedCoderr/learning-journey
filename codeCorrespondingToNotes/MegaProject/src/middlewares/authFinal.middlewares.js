import { ApiError } from "../utils/api-error.js";
import { asyncHandler } from "../utils/async-handler.js";
import jwt from "jsonwebtoken";
import { User } from "../models/user.models.js";

const verifyJWT = async (req, res, next) => {
	try {
		const accessToken = req.cookies?.accessToken;

		if (!accessToken) {
			return next(new ApiError(400, "User not logged In"));
		}

		const decodedData = jwt.verify(
			accessToken,
			process.env.ACCESS_TOKEN_SECRET,
		);
		if (!decodedData) {
			return next(new ApiError(400, "Not a valid token"));
		}

		const userFromDB = await User.findById(decodedData.id);

		if (!userFromDB) {
			return next(new ApiError(400, "Wrong Token"));
		}
		res.user = userFromDB;

		next();
	} catch (error) {
		console.log(error);
	}
};

export { verifyJWT };
