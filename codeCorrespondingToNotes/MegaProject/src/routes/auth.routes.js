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
	verifyEmail,
	resendVerificationEmail,
	forgotPassword,
	resetPassword,
} from "../controllers/auth.controllers.js";
import { verifyJWT } from "../middlewares/authFinal.middlewares.js";

const router = Router();

router
	.route("/register")
	.post(userRegistrationValidator(), validate, registerUser);

router.route("/login").post(userLoginValidator(), validate, loginTheUser);

router.route("/logout").post(verifyJWT, logoutUser);

router.route("/getAccessToken").get(generateNewAccessTokenAndRefreshToken);

router.route("/verify/:verifytoken").get(verifyEmail);

router.route("/newverificationtoken").post(resendVerificationEmail);

router.route("/forgotPass").post(forgotPassword);
router.route("/resetPass/:otp").post(resetPassword);

export default router;
