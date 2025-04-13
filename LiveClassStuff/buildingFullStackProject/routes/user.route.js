import express from "express";
import {
	acceptPost,
	registerUser,
	verifyUser,
	login,
	getMe,
} from "../controller/user.controller.js";
import { isLoggedin } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/register", registerUser);
router.post("/register", registerUser);
router.get("/verify/:token", verifyUser);
router.post("/login", login);
router.post("/me", isLoggedin, getMe);

// router.post("/register", acceptPost);

export default router;
