import express from "express";
import {
	checkWorkingFunctionality,
	login,
	registerUser,
	verifyUser,
	getMe,
	logoutUser,
	resetPassword,
	forgotPassword,
} from "../controllers/user.controllers.js";

import isLoggedIn from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/checkIfWorking", checkWorkingFunctionality);
router.post("/register", registerUser);
router.get("/verify/:token", verifyUser);
router.post("/login", login);
router.get("/me", isLoggedIn, getMe);
router.get("/logout", isLoggedIn, logoutUser);
router.post("/forgotPassword", forgotPassword);
router.post("/resetYourPassword/:token", resetPassword);

export default router;
