import express from "express";
import {
	acceptPost,
	registerUser,
	verifyUser,
	login,
} from "../controller/user.controller.js";

const router = express.Router();

router.get("/register", registerUser);
router.post("/register", registerUser);
router.get("/verify/:token", verifyUser);
router.post("/login", login);

// router.post("/register", acceptPost);

export default router;
