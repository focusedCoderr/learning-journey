import express from "express";
import { acceptPost, registerUser } from "../controller/user.controller.js";

const router = express.Router();

router.get("/register", registerUser);
router.post("/register", registerUser);

// router.post("/register", acceptPost);

export default router;
