import express from "express";
import {
	checkWorkingFunctionality,
	registerUser,
	verifyUser,
} from "../controllers/user.controllers.js";

const router = express.Router();

router.get("/checkIfWorking", checkWorkingFunctionality);
router.post("/register", registerUser);
router.get("/verify/:token", verifyUser);

export default router;
