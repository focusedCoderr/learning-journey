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

const router = express.Router();

router.get("/checkIfWorking", checkWorkingFunctionality);
router.post("/register", registerUser);
router.get("/verify/:token", verifyUser);
router.post("/login", login);
router.get("/me", isLoggedIn, getMe);

export default router;
