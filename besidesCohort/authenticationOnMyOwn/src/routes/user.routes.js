import express from "express";
import {
	checkWorkingFunctionality,
	registerUser,
} from "../controllers/user.controllers.js";

const router = express.Router();

router.get("/checkIfWorking", checkWorkingFunctionality);
router.post("/register", registerUser);

export default router;
