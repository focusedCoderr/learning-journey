import { ApiResponse } from "../utils/api-response.js";
const healthcheck = (req, res) => {
	console.log("coming here");
	return res.status(200).json(
		new ApiResponse(200, {
			message: "Server is running",
		}),
	);
};

export { healthcheck };
