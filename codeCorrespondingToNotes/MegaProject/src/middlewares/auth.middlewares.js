import jwt from "jsonwebtoken";
import { User } from "../models/user.models.js";
import { asyncHandler } from "../utils/async-handler.js";
import { ApiError } from "../utils/api-error";

const isLoggedIn = asyncHandler((req, res, next) => {
	const accessTokenFromCookies = req.cookies.accessToken;

	if (!accessTokenFromCookies) {
		throw new ApiError(400, "Unauthorized Request");
	}

	const userExtractedFromToken = jwt.verify(
		accessTokenFromCookies,
		process.env.ACCESS_TOKEN_SECRET,
	);

	const idOfUserExtractedFromToken = userExtractedFromToken.id;

	const userFetchedFromExtractedId = User.findById(idOfUserExtractedFromToken);

	if (!userFetchedFromExtractedId) {
		throw new ApiError(401, "Invalid  Access Token");
	}

	req.user = userFetchedFromExtractedId;
	next();
});

export { isLoggedIn };
