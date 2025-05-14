import { Router } from "express";
import {
	userRegistrationValidator,
	userLoginValidator,
} from "../validators/index.js";
import { validate } from "../middlewares/validator.middlewares.js";

import { registerUser, loginUser } from "../controllers/auth.controllers.js";
const router = Router();

router
	.route("/register")
	.post(userRegistrationValidator(), validate, registerUser);

router.route("/login").post(userLoginValidator(), validate, loginUser);

export default router;
