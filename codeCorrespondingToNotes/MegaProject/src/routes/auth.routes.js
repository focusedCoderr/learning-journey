import { Router } from "express";
import {
	userRegistrationValidator,
	userLoginValidator,
} from "../validators/index.js";
import { validate } from "../middlewares/validator.middlewares.js";

import { registerUser, loginUser } from "../controllers/auth.controllers.js";
import { isLoggedIn } from "../middlewares/auth.middlewares.js";

import { logoutUser } from "../controllers/auth2.controllers.js";
const router = Router();

router
	.route("/register")
	.post(userRegistrationValidator(), validate, registerUser);

router.route("/login").post(userLoginValidator(), validate, loginUser);

router.route("/logout").post(isLoggedIn, logoutUser);

router.route("/getAccessToken").post(generateNewAccessAndRefreshToken);
export default router;
