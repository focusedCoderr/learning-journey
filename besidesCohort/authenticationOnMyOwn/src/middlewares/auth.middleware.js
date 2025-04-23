import jwt from "jsonwebtoken";

const isLoggedIn = async (req, res, next) => {
	try {
		const token = req.cookies?.token;
		if (!token) {
			return res.status(400).json({
				message: "User not logged in. Please log in",
			});
		}

		const decodedData = jwt.verify(token, process.env.JWT_SECRET);
		console.log(decodedData);

		req.user = decodedData;
		next();
	} catch (error) {
		return res.status(400).json({
			message: "Internal server error",
		});
	}

	// next();

	// sir thinks the above next is important if we somehow do not go in try catch block...
	// but i think it is redundant
};

export default isLoggedIn;
