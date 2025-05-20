import { Router } from "express";
import {
	userRegistrationValidator,
	userLoginValidator,
} from "../validators/index.js";
import { validate } from "../middlewares/validator.middlewares.js";

import {
	registerUser,
	loginTheUser,
	logoutUser,
	generateNewAccessTokenAndRefreshToken,
} from "../controllers/auth.controllers.js";
import { verifyJWT } from "../middlewares/authFinal.middlewares.js";

const router = Router();

router
	.route("/register")
	.post(userRegistrationValidator(), validate, registerUser);

router.route("/login").post(userLoginValidator(), validate, loginTheUser);

router.route("/logout").post(verifyJWT, logoutUser);

router.route("/getAccessToken").post(generateNewAccessTokenAndRefreshToken);

export default router;
